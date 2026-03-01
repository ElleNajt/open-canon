#!/bin/bash
# Run Opus 4.5 and 4.6 on all 4 seeds with setcps, 3 runs each, 30 steps
# Total: 24 runs

cd "$(dirname "$0")"

PROMPT='Evolve this piece. Imbue it with your personality.

Technical limits: .slow()/.fast() 1-16, .gain() above 0.05, filter Q (.lpq etc) below 10. Maximum 6 $: tracks. Maximum 5 effects per track. If you want to add something, remove something else.'

STEPS=30

for seed_name in drum major note chord; do
    seed_file="seeds/${seed_name}_bpm.js"
    for run in 1 2 3; do
        for model in claude claude46; do
            name="bpm_${seed_name}_v${run}"
            echo "=== Starting ${name} / ${model} ==="
            ./.venv/bin/python evolve.py \
                --seed "$seed_file" \
                --name "$name" \
                --steps "$STEPS" \
                --models "$model" \
                --prompt "$PROMPT" &
        done
        # Run 2 at a time (one per model), wait before next pair
        wait
    done
done

echo "=== All runs complete ==="
