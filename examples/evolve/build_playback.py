"""
Build a Strudel playback file that sequences all evolve steps using arrange().

Usage:
  python build_playback.py output/experiment_name/model_name [cycles_per_step]
  python build_playback.py output/bach_canon03_de2e3ab1/claude 8
  python build_playback.py output/bach_canon03_de2e3ab1/claude 8 > ../../live.js

Outputs to stdout. Cycle counts per step are scaled to preserve each step's
intended duration despite tempo changes between steps.
"""

import os
import re
import sys


def eval_setcps(setcps_str):
    """Extract the CPS value from a setcps() call."""
    m = re.match(r"setcps\((.+)\)", setcps_str)
    if not m:
        return None
    try:
        return eval(m.group(1))
    except Exception:
        return None


def parse_step(code, step_num):
    """Split a step file into declarations, setcps, and $: tracks."""
    lines = code.split("\n")
    declarations = []
    tracks = []
    setcps = None
    current_track = None

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("//"):
            continue

        if stripped.startswith("setcps("):
            setcps = stripped
            continue

        if stripped.startswith("$:"):
            if current_track is not None:
                tracks.append("\n".join(current_track))
            current_track = [line.replace("$:", "  ", 1)]
            continue

        if current_track is not None:
            if stripped == "":
                tracks.append("\n".join(current_track))
                current_track = None
            else:
                current_track.append(line)
            continue

        if stripped and not stripped.startswith("$:"):
            declarations.append(line)

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
    base_cycles = int(sys.argv[2]) if len(sys.argv) > 2 else 8

    files = sorted(
        f for f in os.listdir(model_dir) if f.startswith("step_") and f.endswith(".js")
    )

    if not files:
        print(f"No step files found in {model_dir}", file=sys.stderr)
        sys.exit(1)

    # First pass: collect all setcps values and parse steps
    steps = []
    cps_values = []

    for f in files:
        step_num = int(f.replace("step_", "").replace(".js", ""))
        code = open(os.path.join(model_dir, f)).read()
        declarations, setcps, tracks = parse_step(code, step_num)

        cps = None
        if setcps:
            cps = eval_setcps(setcps)
        cps_values.append(cps)

        steps.append((step_num, declarations, setcps, tracks))

    # Fill in missing CPS values (carry forward)
    filled_cps = []
    last_cps = None
    for cps in cps_values:
        if cps is not None:
            last_cps = cps
        filled_cps.append(last_cps)

    # Pick reference CPS: use the first step's tempo as the global tempo
    ref_cps = filled_cps[0]
    if ref_cps is None:
        ref_cps = filled_cps[-1]  # fallback to last known

    ref_setcps = None
    for _, _, setcps, _ in steps:
        if setcps:
            ref_setcps = setcps
            break

    all_declarations = []
    arrange_entries = []

    for i, (step_num, declarations, setcps, tracks) in enumerate(steps):
        if not tracks:
            continue

        renamed_decls, name_map = rename_declarations(declarations, step_num)
        if renamed_decls.strip():
            all_declarations.append(f"// --- step {step_num} voices ---")
            all_declarations.append(renamed_decls)

        renamed_tracks = rename_tracks(tracks, name_map)

        if len(renamed_tracks) == 1:
            stack_code = renamed_tracks[0].strip()
        else:
            inner = ",\n".join(t.rstrip() for t in renamed_tracks)
            stack_code = f"stack(\n{inner}\n  )"

        # Tempo compensation: if this step was written for a different CPS,
        # slow/fast the whole section so it plays at the intended speed,
        # and scale cycle count so wall-clock duration stays consistent.
        step_cps = filled_cps[i]
        if step_cps and ref_cps and abs(step_cps - ref_cps) > 0.001:
            ratio = ref_cps / step_cps
            scaled_cycles = round(base_cycles * ratio)
            scaled_cycles = max(1, scaled_cycles)
            stack_code = f"{stack_code}.slow({ratio:.4f})"
        else:
            scaled_cycles = base_cycles

        arrange_entries.append(f"  [{scaled_cycles}, {stack_code}]")

    # Output
    print("// Auto-generated playback of evolve steps")
    print(f"// Source: {model_dir}")
    print(f"// {len(files)} steps, ~{base_cycles} cycles each (scaled for tempo)")
    print()

    for d in all_declarations:
        print(d)
    print()

    if ref_setcps:
        print(ref_setcps)
    print()

    print("$: arrange(")
    print(",\n".join(arrange_entries))
    print(")")


if __name__ == "__main__":
    main()
