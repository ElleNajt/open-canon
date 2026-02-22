#!/bin/bash
# Play evolve steps through live.js, one at a time
# Usage: ./playback.sh output/experiment_name/model_name [seconds_per_step]

set -e

DIR="${1:?Usage: ./playback.sh output/experiment_name/model_name [seconds_per_step]}"
DELAY="${2:-10}"
LIVE_JS="$(dirname "$0")/../../live.js"

STEPS=($(ls "$DIR"/step_*.js | sort -V))
echo "Playing ${#STEPS[@]} steps from $DIR (${DELAY}s each)"

for f in "${STEPS[@]}"; do
    step=$(basename "$f")
    echo ">> $step"
    cp "$f" "$LIVE_JS"
    sleep "$DELAY"
done

echo "Done."
