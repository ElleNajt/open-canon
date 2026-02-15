#!/bin/bash
# Start the collab server locally

cd "$(dirname "$0")"

# Check for .env file
if [ ! -f .env ]; then
    echo "Error: .env file not found. Create one with ANTHROPIC_API_KEY=your-key"
    exit 1
fi

# Export env vars
export $(cat .env | xargs)

# Install dependencies if needed
if [ ! -d ".venv" ]; then
    python3 -m venv .venv
    .venv/bin/pip install -r requirements.txt
fi

# Run the server
.venv/bin/uvicorn main:app --host 0.0.0.0 --port 8080 --reload
