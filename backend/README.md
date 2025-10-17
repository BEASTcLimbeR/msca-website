# MSCA Backend API

Backend server for Maharashtra Sport Climbing Association contact form.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the backend directory with the following variables:

```env
# Email Configuration
EMAIL_USER=infomymsca@gmail.com
EMAIL_PASS=your_gmail_app_password_here

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > App passwords
4. Generate an app password for "Mail"
5. Use this password as EMAIL_PASS in your .env file

### 4. Run the Server
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### POST /api/contact
Submit contact form data

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "subject": "Training Inquiry",
  "message": "I would like to know about training programs."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "success": true,
  "message": "MSCA Backend API is running",
  "timestamp": "2025-01-13T10:30:00.000Z"
}
```

## Email Configuration

- **From:** infomymsca@gmail.com
- **To:** infomymsca@gmail.com (admin receives the inquiry)
- **CC:** User's email (confirmation email)

## CORS Configuration

The server is configured to accept requests from:
- http://localhost:3000 (development)
- https://your-domain.com (production)

Update the CORS origin in server.js for production deployment.
