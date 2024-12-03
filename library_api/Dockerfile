FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

COPY . .

RUN pip install --no-cache-dir --upgrade pip && pip install -r requirements.txt

EXPOSE 5000

ENV FLASK_APP=run.py

ENV FLASK_RUN_HOST=0.0.0.0

COPY wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh

CMD ["./wait-for-it.sh", "db:5432", "--", "flask", "run"]

