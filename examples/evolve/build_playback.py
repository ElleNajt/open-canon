"""
Build a Strudel playback file that sequences all evolve steps using arrange().

Usage:
  python build_playback.py output/experiment_name/model_name [cycles_per_step]
  python build_playback.py output/bach_canon03_de2e3ab1/claude 8
  python build_playback.py output/bach_canon03_de2e3ab1/claude 8 > ../../live.js

Outputs to stdout.
"""

import os
import re
import sys


def parse_step(code, step_num):
    """Split a step file into declarations, setcps, and $: tracks."""
    lines = code.split("\n")
    declarations = []
    tracks = []
    setcps = None
    current_track = None

    for line in lines:
        # Skip comments
        stripped = line.strip()
        if stripped.startswith("//"):
            continue

        # Capture setcps
        if stripped.startswith("setcps("):
            setcps = stripped
            continue

        # Start of a new $: track
        if stripped.startswith("$:"):
            if current_track is not None:
                tracks.append("\n".join(current_track))
            current_track = [line.replace("$:", "  ", 1)]
            continue

        # Continuation of a track (indented or chained)
        if current_track is not None:
            if stripped == "":
                # Blank line ends a track
                tracks.append("\n".join(current_track))
                current_track = None
            else:
                current_track.append(line)
            continue

        # Declaration (let, const, var, or function)
        if stripped and not stripped.startswith("$:"):
            declarations.append(line)

    # Don't forget the last track
    if current_track is not None:
        tracks.append("\n".join(current_track))

    return declarations, setcps, tracks


def rename_declarations(declarations, step_num):
    """Rename let/const variables to include step number to avoid collisions."""
    renamed = []
    name_map = {}

    for line in declarations:
        m = re.match(r"^(let|const|var)\s+(\w+)", line)
        if m:
            old_name = m.group(2)
            new_name = f"{old_name}_s{step_num}"
            name_map[old_name] = new_name

        renamed.append(line)

    # Apply renames
    result = "\n".join(renamed)
    for old_name, new_name in sorted(name_map.items(), key=lambda x: -len(x[0])):
        result = result.replace(old_name, new_name)

    return result, name_map


def rename_tracks(tracks, name_map):
    """Apply variable renames to track code."""
    result = []
    for track in tracks:
        renamed = track
        for old_name, new_name in sorted(name_map.items(), key=lambda x: -len(x[0])):
            renamed = renamed.replace(old_name, new_name)
        result.append(renamed)
    return result


def main():
    if len(sys.argv) < 2:
        print(__doc__, file=sys.stderr)
        sys.exit(1)

    model_dir = sys.argv[1]
    cycles_per_step = int(sys.argv[2]) if len(sys.argv) > 2 else 8

    # Find all step files
    files = sorted(
        f for f in os.listdir(model_dir) if f.startswith("step_") and f.endswith(".js")
    )

    if not files:
        print(f"No step files found in {model_dir}", file=sys.stderr)
        sys.exit(1)

    all_declarations = []
    arrange_entries = []
    last_setcps = None

    for f in files:
        step_num = int(f.replace("step_", "").replace(".js", ""))
        code = open(os.path.join(model_dir, f)).read()

        declarations, setcps, tracks = parse_step(code, step_num)

        if setcps:
            last_setcps = setcps

        if not tracks:
            continue

        # Rename declarations to avoid collisions between steps
        renamed_decls, name_map = rename_declarations(declarations, step_num)
        if renamed_decls.strip():
            all_declarations.append(f"// --- step {step_num} voices ---")
            all_declarations.append(renamed_decls)

        renamed_tracks = rename_tracks(tracks, name_map)

        # Build stack() of this step's tracks
        if len(renamed_tracks) == 1:
            stack_code = renamed_tracks[0].strip()
        else:
            inner = ",\n".join(t.rstrip() for t in renamed_tracks)
            stack_code = f"stack(\n{inner}\n  )"

        arrange_entries.append(f"  [{cycles_per_step}, {stack_code}]")

    # Output
    print("// Auto-generated playback of evolve steps")
    print(f"// Source: {model_dir}")
    print(f"// {len(files)} steps, {cycles_per_step} cycles each")
    print()

    # Declarations
    for d in all_declarations:
        print(d)
    print()

    # Tempo
    if last_setcps:
        print(last_setcps)
    print()

    # The arrange
    print("$: arrange(")
    print(",\n".join(arrange_entries))
    print(")")


if __name__ == "__main__":
    main()
