# Technical Architecture Document
## MeetConnect Platform

### Document Information
- **Version**: 1.0
- **Last Updated**: November 2025
- **Author**: Technical Team

---

## 1. System Overview

### 1.1 High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
├───────────────┬─────────────────┬──────────────────────────┤
│  iOS App      │  Android App    │    Web Application        │
│ (React Native)│ (React Native)  │      (React.js)           │
└───────────────┴─────────────────┴──────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Gateway / Load Balancer               │
└─────────────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   REST API   │ │  WebSocket   │ │ Auth Service │
│  (Express)   │ │  (Socket.io) │ │    (JWT)     │
└──────────────┘ └──────────────┘ └──────────────┘
        │               │               │
        └───────────────┼───────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    Application Services                      │
├──────────────┬──────────────┬──────────────┬───────────────┤
│    User      │   Activity   │   Message    │  Notification │
│   Service    │   Service    │   Service    │    Service    │
└──────────────┴──────────────┴──────────────┴───────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  PostgreSQL  │ │    Redis     │ │   AWS S3     │
│  (Primary)   │ │  (Cache)     │ │  (Storage)   │
└──────────────┘ └──────────────┘ └──────────────┘
```

---

## 2. Technology Stack

### 2.1 Frontend

#### Mobile Applications
- **Framework**: React Native 0.73+
- **Navigation**: Expo Router (file-based routing)
- **State Management**: Zustand
- **UI Components**: React Native Paper / Custom
- **Maps**: React Native Maps (Google Maps / Apple Maps)
- **Real-time**: Socket.io Client
- **HTTP Client**: Axios
- **Image Handling**: Expo Image Picker
- **Notifications**: Firebase Cloud Messaging
- **Camera**: Expo Camera
- **Location**: Expo Location

#### Web Application
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Maps**: Leaflet / React-Leaflet
- **Real-time**: Socket.io Client
- **HTTP Client**: Axios

### 2.2 Backend

#### API Server
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Real-time**: Socket.io
- **Authentication**: JWT + Passport.js
- **Validation**: express-validator
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Winston
- **File Upload**: Multer

#### Database
- **Primary Database**: PostgreSQL 15+
- **ORM**: Prisma
- **Cache**: Redis
- **File Storage**: AWS S3 / Cloudinary

#### External Services
- **Maps**: Google Maps API / Mapbox
- **Push Notifications**: Firebase Cloud Messaging
- **Email**: SendGrid / AWS SES
- **SMS**: Twilio
- **OAuth**: Google, Facebook, Apple

### 2.3 Infrastructure

#### Development
- **Version Control**: Git
- **Package Manager**: npm / yarn
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Jest, React Testing Library

#### Production (Future)
- **Hosting**: AWS / Google Cloud / Azure
- **Container**: Docker
- **Orchestration**: Kubernetes (optional)
- **CI/CD**: GitHub Actions
- **Monitoring**: New Relic / Datadog
- **Error Tracking**: Sentry

---

## 3. Database Schema

### 3.1 Core Tables

#### Users Table
```sql
- id (UUID, PK)
- email (unique)
- password_hash
- name
- bio
- avatar_url
- date_of_birth
- gender
- phone
- verified
- google_id
- facebook_id
- safety_rating
- created_at
- updated_at
```

#### Activities Table
```sql
- id (UUID, PK)
- creator_id (FK -> users)
- title
- description
- category
- latitude
- longitude
- address
- city
- country
- start_time
- end_time
- max_participants
- min_age / max_age
- status
- is_public
- images (JSON)
- created_at
- updated_at
```

#### Activity_Participants Table
```sql
- id (UUID, PK)
- activity_id (FK -> activities)
- user_id (FK -> users)
- status (joined/left/removed)
- joined_at
```

#### Messages Table
```sql
- id (UUID, PK)
- sender_id (FK -> users)
- receiver_id (FK -> users, nullable)
- activity_id (FK -> activities, nullable)
- content
- type (text/image/location)
- read
- created_at
```

#### Reviews Table
```sql
- id (UUID, PK)
- reviewer_id (FK -> users)
- reviewee_id (FK -> users)
- rating (1-5)
- comment
- created_at
```

### 3.2 Indexes
- Users: email, (latitude, longitude)
- Activities: (latitude, longitude), category, start_time, creator_id
- Messages: sender_id, receiver_id, activity_id
- Activity_Participants: activity_id, user_id

---

## 4. API Design

### 4.1 RESTful Endpoints

#### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/refresh
GET    /api/auth/me
POST   /api/auth/verify-email
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

#### Users
```
GET    /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
POST   /api/users/:id/verify
POST   /api/users/:id/block
GET    /api/users/:id/activities
```

#### Activities
```
GET    /api/activities
POST   /api/activities
GET    /api/activities/:id
PUT    /api/activities/:id
DELETE /api/activities/:id
POST   /api/activities/:id/join
POST   /api/activities/:id/leave
GET    /api/activities/:id/participants
POST   /api/activities/:id/report
```

#### Messages
```
GET    /api/messages
GET    /api/messages/:conversationId
POST   /api/messages
PUT    /api/messages/:id/read
```

#### Reviews
```
POST   /api/reviews
GET    /api/reviews/user/:userId
```

### 4.2 WebSocket Events

#### Client -> Server
```
connection
disconnect
join:room
leave:room
message:send
typing:start
typing:stop
location:update
```

#### Server -> Client
```
message:receive
typing:indicator
activity:update
user:online
user:offline
notification:new
```

---

## 5. Security

### 5.1 Authentication
- JWT tokens with refresh mechanism
- Token expiration: 7 days (access), 30 days (refresh)
- Secure password hashing (bcrypt, 10 rounds)
- OAuth 2.0 for social login

### 5.2 Authorization
- Role-based access control (User, Admin)
- Resource ownership validation
- Activity participation verification

### 5.3 Data Protection
- HTTPS/TLS for all communications
- SQL injection prevention (parameterized queries)
- XSS protection
- CSRF tokens
- Rate limiting (100 requests / 15 minutes per IP)
- Input validation and sanitization

### 5.4 Privacy
- GDPR compliance
- Data encryption at rest
- User data export capability
- Account deletion with data purge
- Privacy settings (location, profile visibility)

---

## 6. Performance Optimization

### 6.1 Caching Strategy
- Redis caching for:
  - User sessions
  - Frequently accessed activities
  - Activity search results (5 min TTL)
  - User profiles (10 min TTL)

### 6.2 Database Optimization
- Proper indexing on frequently queried fields
- Connection pooling
- Query optimization
- Pagination for large datasets

### 6.3 API Optimization
- Response compression (gzip)
- Image optimization and CDN
- Lazy loading for mobile apps
- Infinite scroll for activity feeds

### 6.4 Real-time Optimization
- WebSocket connection pooling
- Message batching
- Presence tracking with Redis

---

## 7. Scalability

### 7.1 Horizontal Scaling
- Stateless API servers
- Load balancer distribution
- Database read replicas
- Redis cluster

### 7.2 Vertical Scaling
- Resource monitoring
- Auto-scaling policies
- Database performance tuning

---

## 8. Monitoring & Logging

### 8.1 Application Monitoring
- API response times
- Error rates
- Active users
- WebSocket connections

### 8.2 Infrastructure Monitoring
- CPU, Memory, Disk usage
- Database performance
- Network latency

### 8.3 Logging
- Structured logging (JSON)
- Log levels (error, warn, info, debug)
- Centralized log aggregation
- Log retention policies

---

## 9. Development Workflow

### 9.1 Environment Setup
1. Clone repository
2. Install dependencies (npm install)
3. Set up PostgreSQL database
4. Configure environment variables
5. Run migrations (prisma migrate)
6. Start development servers

### 9.2 Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Husky pre-commit hooks
- Conventional commits

### 9.3 Testing Strategy
- Unit tests (Jest)
- Integration tests
- E2E tests (future)
- API tests (Postman/Newman)
- Manual QA before releases

---

## 10. Deployment Strategy

### 10.1 Environments
- **Development**: Local machines
- **Staging**: Testing environment (cloud)
- **Production**: Live environment (cloud)

### 10.2 CI/CD Pipeline
1. Code push to repository
2. Automated tests run
3. Build application
4. Deploy to staging
5. QA testing
6. Deploy to production
7. Monitor deployment

### 10.3 Mobile App Releases
- iOS: TestFlight -> App Store
- Android: Internal testing -> Google Play
- Over-the-air updates (Expo Updates)

---

## 11. Disaster Recovery

### 11.1 Backup Strategy
- Daily database backups
- File storage replication
- Configuration backups
- 30-day retention policy

### 11.2 Recovery Plan
- Database restore procedures
- Rollback mechanisms
- Incident response plan
- Communication plan
