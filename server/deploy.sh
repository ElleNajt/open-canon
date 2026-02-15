#!/bin/bash
# Deploy to Cloud Run
# Requires: gcloud CLI authenticated, Strudel cloned at ../strudel

set -e

cd "$(dirname "$0")/.."

PROJECT="vibe-duet"
REGION="us-central1"
SERVICE="vibe-duet"
IMAGE="gcr.io/$PROJECT/collab-server"
SITE_URL="https://YOUR_CLOUD_RUN_URL/"

echo "==> Applying collab patch to Strudel..."
cd strudel
git checkout -- .
git apply ../patches/collab.patch

echo "==> Building Strudel..."
cd website
SITE_URL="$SITE_URL" npm run build

echo "==> Copying static files..."
rm -rf ../../server/static
cp -r dist ../../server/static

echo "==> Building container..."
cd ../../server
gcloud builds submit --tag $IMAGE --project $PROJECT

echo "==> Deploying to Cloud Run..."
gcloud run deploy $SERVICE \
    --image $IMAGE \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --project $PROJECT \
    --set-secrets=ANTHROPIC_API_KEY=anthropic-api-key:latest \
    --min-instances=0 \
    --max-instances=1 \
    --service-account=YOUR_SERVICE_ACCOUNT

echo "==> Done! Service URL: $SITE_URL"
