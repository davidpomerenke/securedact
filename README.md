# ⛓️‍💥 Freedomizer

A tool for redacting sensitive information from PDF documents using AI assistance.

## Features

- Upload and view PDF documents
- AI-powered detection of sensitive information
- Manual redaction by highlighting text
- Export redacted PDFs

## Setup

1. Create a `.env` file with your Azure OpenAI credentials:

```env
AZURE_OPENAI_API_KEY=your_key
AZURE_OPENAI_API_BASE=your_base_url
AZURE_OPENAI_API_VERSION=your_version
```

2. Build and run with Docker:

```bash
docker build -t freedomizer .
docker run -p 8000:8000 --env-file .env --rm freedomizer
```

Or run locally:

```bash
# Frontend
cd frontend
npm install
npm start

# Backend
cd backend
uv run uvicorn main:app --reload
```

## License

MIT License (c) BMZ / David Pomerenke

The frontend is based on an example from [react-pdf-highlighter](https://github.com/agentcooper/react-pdf-highlighter/), MIT License.