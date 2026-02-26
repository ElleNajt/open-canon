#!/bin/bash
# Deploy to Cloud Run
# Requires: gcloud CLI authenticated, deployment_config.json in project root

set -e

cd "$(dirname "$0")/.."

CONFIG="deployment_config.json"
if [ ! -f "$CONFIG" ]; then
    echo "Error: $CONFIG not found."
    echo "Create it with: project, region, service, image, site_url, service_account"
    exit 1
fi

PROJECT=$(python3 -c "import json; print(json.load(open('$CONFIG'))['project'])")
REGION=$(python3 -c "import json; print(json.load(open('$CONFIG'))['region'])")
SERVICE=$(python3 -c "import json; print(json.load(open('$CONFIG'))['service'])")
IMAGE=$(python3 -c "import json; print(json.load(open('$CONFIG'))['image'])")
SITE_URL=$(python3 -c "import json; print(json.load(open('$CONFIG'))['site_url'])")
SERVICE_ACCOUNT=$(python3 -c "import json; print(json.load(open('$CONFIG'))['service_account'])")

echo "==> Building Strudel..."
cd strudel/website
SITE_URL="$SITE_URL" npm run build

echo "==> Copying static files..."
rm -rf ../../server/static
cp -r dist ../../server/static

echo "==> Copying shabda source..."
cd ../../server
rm -rf shabda
cp -r ../shabda shabda

echo "==> Copying models config..."
cp ../models.json models.json

echo "==> Building container..."
gcloud builds submit --tag $IMAGE --project $PROJECT

echo "==> Deploying to Cloud Run..."
gcloud run deploy $SERVICE \
    --image $IMAGE \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --project $PROJECT \
    --set-secrets=ANTHROPIC_API_KEY=anthropic-api-key:latest \
    --set-env-vars=USE_FIRESTORE=1 \
    --min-instances=0 \
    --max-instances=1 \
    --service-account=$SERVICE_ACCOUNT

echo "==> Done! Service URL: $SITE_URL"
