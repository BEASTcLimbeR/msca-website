# MSCA Backend API

Backend API for Maharashtra Sports Climbing Association contact form.

## Environment Variables

Create a `.env` file with:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
NODE_ENV=production
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/admin` - Get all contacts (admin)

## Installation

```bash
npm install
npm start
```
