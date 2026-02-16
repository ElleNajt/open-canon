#!/usr/bin/env python3
"""Split a Strudel file into sections based on musical phrases."""

import re
import sys
from pathlib import Path


def expand_rests(pattern):
    """Expand ~!N notation to individual ~ symbols."""

    def replace(m):
        count = int(m.group(1))
        return " ".join(["~"] * count)

    return re.sub(r"~!(\d+)", replace, pattern)


def compress_rests(tokens):
    """Compress consecutive ~ back to ~!N notation."""
    if not tokens:
        return ""

    result = []
    i = 0
    while i < len(tokens):
        if tokens[i] == "~":
            # Count consecutive rests
            count = 0
            while i < len(tokens) and tokens[i] == "~":
                count += 1
                i += 1
            if count == 1:
                result.append("~")
            else:
                result.append(f"~!{count}")
        else:
            result.append(tokens[i])
            i += 1
    return " ".join(result)


def split_pattern(pattern, start_slot, end_slot):
    """Extract a slice of the pattern between start and end slots."""
    expanded = expand_rests(pattern)
    tokens = expanded.split()
    sliced = tokens[start_slot:end_slot]
    return compress_rests(sliced)


def parse_strudel_file(content):
    """Parse strudel file into tracks."""
    tracks = []

    # Split by track comments
    # Handle first track which starts at beginning of file
    if content.startswith("// "):
        content = "\n" + content
    track_sections = re.split(r"\n// ", content)

    for section in track_sections[1:]:  # Skip first empty section
        lines = section.split("\n")
        track_name = lines[0].strip()

        # Find all note patterns in this section (until next track or end)
        section_text = "\n".join(lines[1:])

        # Stop at next track marker
        next_track = section_text.find("\n// ")
        if next_track > 0:
            section_text = section_text[:next_track]

        # Extract note patterns
        note_patterns = re.findall(r'note\("([^"]*)"\)', section_text)

        if note_patterns:
            is_stack = "stack(" in section_text
            tracks.append(
                {"name": track_name, "patterns": note_patterns, "is_stack": is_stack}
            )

    # Get the slow() value
    slow_match = re.search(r"\.slow\(([\d./]+)\)", content)
    slow_value = slow_match.group(1) if slow_match else "1"

    return tracks, slow_value


def generate_section_file(
    tracks,
    slow_value,
    start_slot,
    end_slot,
    section_slots,
    section_name,
    voice_type_map,
):
    """Generate a strudel file for one section."""

    lines = [
        f"// BWV 1050 Brandenburg Concerto No. 5 - Movement 1: {section_name.title()}",
        "",
        "// Baroque style voices",
        "let upperVoice = x => x",
        '  .sound("triangle")',
        "  .gain(0.45)",
        "  .attack(0.02)",
        "  .decay(0.15)",
        "  .sustain(0.2)",
        "  .lpf(2500)",
        "  .room(0.15)",
        "",
        "let lowerVoice = x => x",
        '  .sound("square")',
        "  .gain(0.5)",
        "  .decay(0.15)",
        "  .sustain(0.2)",
        "  .room(0.15)",
        "",
        "setcps(100/60/4)",
        "",
    ]

    # Calculate new slow value for the section
    total_slots = sum(len(expand_rests(p).split()) for p in tracks[0]["patterns"])
    section_ratio = section_slots / total_slots

    # Parse original slow value
    if "/" in slow_value:
        new_slow = f"{float(eval(slow_value)) * section_ratio:.2f}"
    else:
        new_slow = f"{float(slow_value) * section_ratio:.2f}"

    pan_values = [0.4, 0.6, 0.3, 0.35, 0.45, 0.55, 0.65, 0.7]

    for i, track in enumerate(tracks):
        voice_type = voice_type_map.get(track["name"], "upper")
        voice_func = "upperVoice" if voice_type == "upper" else "lowerVoice"
        pan = pan_values[i % len(pan_values)]

        lines.append(f"// {track['name']}")

        if track["is_stack"] and len(track["patterns"]) > 1:
            lines.append("$: stack(")
            for j, pattern in enumerate(track["patterns"]):
                sliced = split_pattern(pattern, start_slot, end_slot)
                comma = "," if j < len(track["patterns"]) - 1 else ""
                lines.append(f'  note("{sliced}"){comma}')
            lines.append(")")
        else:
            sliced = split_pattern(track["patterns"][0], start_slot, end_slot)
            lines.append(f'$: note("{sliced}")')

        lines.append(f"  .slow({new_slow})")
        lines.append(f"  .apply({voice_func})")
        lines.append(f"  .pan({pan})")
        lines.append("")

    return "\n".join(lines)


def main():
    input_file = Path("movement1.strudel")

    # Section definitions (measures)
    sections = [
        (0, 17, "opening"),
        (18, 55, "development1"),
        (56, 101, "development2"),
        (102, 153, "buildup"),
        (154, 217, "cadenza"),
        (218, 226, "finale"),
    ]

    # Voice types (upper = triangle, lower = square)
    voice_type_map = {
        "Cembalo RH": "upper",
        "Cembalo LH": "lower",
        "Flute": "upper",
        "Violin pr": "upper",
        "2nd Violin": "upper",
        "Viola": "lower",
        "Cello": "lower",
        "Bass": "lower",
    }

    content = input_file.read_text()
    tracks, slow_value = parse_strudel_file(content)

    if not tracks:
        print("No tracks found!")
        return

    # Calculate slots per measure
    first_pattern = tracks[0]["patterns"][0]
    total_slots = len(expand_rests(first_pattern).split())
    total_measures = 227
    slots_per_measure = total_slots / total_measures

    print(f"Parsed {len(tracks)} tracks")
    print(f"Total slots: {total_slots}, slots/measure: {slots_per_measure:.1f}")
    print()

    for start_m, end_m, name in sections:
        start_slot = int(start_m * slots_per_measure)
        end_slot = int((end_m + 1) * slots_per_measure)
        section_slots = end_slot - start_slot

        output = generate_section_file(
            tracks,
            slow_value,
            start_slot,
            end_slot,
            section_slots,
            name,
            voice_type_map,
        )

        output_file = Path(f"movement1-{name}.strudel")
        output_file.write_text(output)
        print(f"Wrote {output_file} (measures {start_m}-{end_m})")


if __name__ == "__main__":
    main()
