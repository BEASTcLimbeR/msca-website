# MongoDB Setup Guide for MSCA Backend

## Option 1: MongoDB Atlas (Cloud - Recommended)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new cluster (choose the free tier)

### Step 2: Get Connection String
1. In your Atlas dashboard, click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Replace `<dbname>` with `msca`

### Step 3: Update Environment Variables
Update your `.env` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/msca?retryWrites=true&w=majority
```

## Option 2: Local MongoDB Installation

### Step 1: Install MongoDB
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install MongoDB
3. Start MongoDB service

### Step 2: Update Environment Variables
Your `.env` file should have:
```env
MONGODB_URI=mongodb://localhost:27017/msca
```

## Testing the Connection

After setting up MongoDB, restart your backend server:
```bash
cd backend
node server.js
```

You should see:
```
🗄️  MongoDB Connected: [hostname]
🚀 MSCA Backend server running on port 5000
📧 Contact form emails will be sent to: infomymsca@gmail.com
```

## Admin Panel

Once MongoDB is connected, you can access the admin panel at:
- **URL**: `http://localhost:3000/admin`
- **Features**:
  - View all contact submissions
  - Filter by status (new, read, replied, closed)
  - Search contacts
  - Update contact status
  - View statistics

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form (saves to MongoDB + sends email)

### Admin Endpoints
- **GET** `/api/admin/contacts` - Get all contacts (with pagination/filtering)
- **GET** `/api/admin/contacts/:id` - Get single contact
- **PATCH** `/api/admin/contacts/:id/status` - Update contact status
- **GET** `/api/admin/contacts/stats` - Get contact statistics

## Database Schema

### Contact Collection
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required),
  phone: String (optional),
  subject: String (required, enum),
  message: String (required),
  status: String (enum: new, read, replied, closed),
  adminNotes: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```
