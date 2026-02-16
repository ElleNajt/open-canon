FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y git ffmpeg && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install shabda from local fork
COPY shabda/ /app/shabda/
RUN pip install --no-cache-dir /app/shabda/

COPY main.py .
COPY static/ static/

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
