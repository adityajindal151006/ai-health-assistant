# AI Health Assistant Backend

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm start
   ```

- The backend will run on http://localhost:5000
- Example endpoint: POST /api/chat

## Endpoints

- `GET /` — Health check
- `POST /api/chat` — Send `{ "message": "your question" }` and get `{ "reply": "AI response" }`

## Next Steps
- Add authentication endpoints (Google OAuth, etc.)
- Connect frontend to backend for chat
