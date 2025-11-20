# MeetConnect Backend API

Node.js/Express REST API with Socket.io for real-time features.

## Features
- RESTful API
- JWT Authentication
- Real-time messaging (Socket.io)
- PostgreSQL database (Prisma ORM)
- Redis caching
- File uploads (AWS S3)
- Email notifications
- Rate limiting
- Comprehensive logging

## Setup

### Prerequisites
- Node.js 18+
- PostgreSQL
- Redis (optional, for caching)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/meetconnect"

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Redis (optional)
REDIS_URL=redis://localhost:6379

# AWS S3 (for file uploads)
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=meetconnect-uploads

# OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

### Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database (optional)
npm run db:seed
```

## Development

```bash
npm run dev
```

API will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get users (with filters)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Activities
- `GET /api/activities` - Get activities (with filters)
- `POST /api/activities` - Create activity
- `GET /api/activities/:id` - Get activity details
- `PUT /api/activities/:id` - Update activity
- `DELETE /api/activities/:id` - Delete activity
- `POST /api/activities/:id/join` - Join activity
- `POST /api/activities/:id/leave` - Leave activity

### Messages
- `GET /api/messages` - Get conversations
- `GET /api/messages/:id` - Get conversation messages
- `POST /api/messages` - Send message

### WebSocket Events
- `connection` - Client connects
- `message:send` - Send real-time message
- `activity:update` - Activity updates
- `user:online` - User status updates

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/          # Data models (Prisma)
│   ├── routes/          # API routes
│   ├── middleware/      # Express middleware
│   ├── services/        # Business logic
│   ├── utils/           # Utilities
│   ├── config/          # Configuration
│   ├── types/           # TypeScript types
│   └── server.ts        # Entry point
├── prisma/
│   └── schema.prisma    # Database schema
└── tests/               # Tests
```
