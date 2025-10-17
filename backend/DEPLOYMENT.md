# MSCA Backend Deployment Guide

## Render Deployment

### Environment Variables Required:
- `EMAIL_USER`: Your Gmail address (e.g., infomymsca@gmail.com)
- `EMAIL_PASS`: Your Gmail app password
- `MONGODB_URI`: MongoDB connection string
- `NODE_ENV`: Set to "production"
- `PORT`: Will be set automatically by Render

### Steps to Deploy:
1. Push the backend code to GitHub
2. Connect your GitHub repo to Render
3. Set the environment variables in Render dashboard
4. Deploy!

### API Endpoints:
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form submission
- `GET /api/admin` - Get all contact submissions (admin)

### CORS Configuration:
The backend is configured to accept requests from:
- http://localhost:3000 (development)
- https://mymsca.org
- https://www.mymsca.org
