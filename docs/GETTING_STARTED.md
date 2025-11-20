# Getting Started with MeetConnect Development

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **PostgreSQL** (v15 or higher) - [Download](https://www.postgresql.org/)
- **Redis** (optional but recommended) - [Download](https://redis.io/)
- **VS Code** (recommended) - [Download](https://code.visualstudio.com/)

### For Mobile Development
- **Expo CLI**: `npm install -g expo-cli`
- **iOS Development** (Mac only):
  - Xcode (latest version)
  - iOS Simulator
- **Android Development**:
  - Android Studio
  - Android SDK
  - Android Emulator

---

## Initial Setup

### 1. Install All Dependencies

From the root directory, run:

```bash
npm install
```

This will install dependencies for all workspaces (mobile, web, backend, shared).

### 2. Set Up the Database

#### Create PostgreSQL Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE meetconnect;

# Create user (optional)
CREATE USER meetconnect_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE meetconnect TO meetconnect_user;

# Exit
\q
```

#### Configure Environment Variables

Create a `.env` file in the `backend` directory:

```bash
cd backend
cp .env.example .env
```

Edit `.env` and update the `DATABASE_URL`:

```env
DATABASE_URL="postgresql://meetconnect_user:your_password@localhost:5432/meetconnect"
```

#### Run Database Migrations

```bash
cd backend
npm run db:generate
npm run db:migrate
```

### 3. Start Redis (Optional but Recommended)

```bash
# macOS with Homebrew
brew services start redis

# Linux
sudo systemctl start redis

# Windows (with Redis installed)
redis-server
```

### 4. Configure API Keys

You'll need to obtain API keys for various services:

#### Google Maps API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Maps JavaScript API and Places API
4. Create API credentials
5. Add to `backend/.env`:
   ```env
   GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

#### OAuth (Optional for MVP)
- **Google OAuth**: [Console](https://console.cloud.google.com/)
- **Facebook OAuth**: [Developers](https://developers.facebook.com/)

---

## Running the Application

### Option 1: Run Everything Concurrently

From the root directory:

```bash
npm run dev:all
```

This starts both the backend and web app simultaneously.

### Option 2: Run Services Individually

#### Backend API

```bash
cd backend
npm run dev
```

Server runs on `http://localhost:3000`

#### Web Application

```bash
cd web
npm run dev
```

Web app runs on `http://localhost:5173`

#### Mobile Application

```bash
cd mobile
npm start
```

This will:
1. Start the Metro bundler
2. Show QR code in terminal
3. Provide options to open in:
   - iOS Simulator (press `i`)
   - Android Emulator (press `a`)
   - Expo Go app on your phone (scan QR code)

---

## Development Workflow

### 1. Code Structure

```
MeetConnect/
├── mobile/           # React Native app
│   ├── app/         # Expo Router pages
│   ├── src/         # Source code
│   │   ├── components/
│   │   ├── screens/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│   └── assets/
│
├── web/             # React web app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── public/
│
├── backend/         # Node.js API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── utils/
│   └── prisma/
│
└── docs/           # Documentation
```

### 2. Making Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

3. **Test your changes**:
   ```bash
   npm test
   ```

4. **Commit with conventional commits**:
   ```bash
   git commit -m "feat: add user profile editing"
   ```

5. **Push and create PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

### 3. Common Development Tasks

#### Add a new API endpoint

1. Create route in `backend/src/routes/`
2. Create controller in `backend/src/controllers/`
3. Add service logic in `backend/src/services/`
4. Update API documentation

#### Add a new screen (Mobile)

1. Create file in `mobile/app/` (for Expo Router)
2. Add necessary components in `mobile/src/components/`
3. Update navigation if needed

#### Add a new page (Web)

1. Create page in `web/src/pages/`
2. Add route in `web/src/App.tsx`
3. Create components in `web/src/components/`

#### Update database schema

1. Edit `backend/prisma/schema.prisma`
2. Run migration:
   ```bash
   cd backend
   npm run db:migrate
   ```
3. Update TypeScript types

---

## Testing

### Backend Testing

```bash
cd backend
npm test
```

### Web Testing

```bash
cd web
npm test
```

### Mobile Testing

```bash
cd mobile
npm test
```

---

## Troubleshooting

### Port Already in Use

If port 3000 or 5173 is in use:

**Windows:**
```powershell
# Find process using port
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F
```

**macOS/Linux:**
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

### Database Connection Issues

1. Ensure PostgreSQL is running
2. Check `DATABASE_URL` in `.env`
3. Verify database exists:
   ```bash
   psql -U postgres -l
   ```

### Mobile App Won't Load

1. Clear Metro bundler cache:
   ```bash
   cd mobile
   npm start -- --clear
   ```

2. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. For iOS, rebuild:
   ```bash
   cd ios
   pod install
   cd ..
   npm run ios
   ```

### Expo Go Issues

- Ensure phone and computer are on same Wi-Fi network
- Try using tunnel connection:
  ```bash
  npm start -- --tunnel
  ```

---

## Useful Commands

### Database

```bash
# Generate Prisma client
npm run db:generate

# Create migration
npm run db:migrate

# Reset database
npx prisma migrate reset

# Open Prisma Studio (GUI)
npx prisma studio
```

### Development

```bash
# Install all dependencies
npm run install:all

# Clean all node_modules
npm run clean

# Lint code
npm run lint

# Format code
npx prettier --write .
```

---

## Next Steps

1. **Read the documentation**:
   - [Product Requirements](./PRD.md)
   - [Architecture](./ARCHITECTURE.md)
   - [Roadmap](./ROADMAP.md)

2. **Start building**:
   - Implement authentication
   - Create user profiles
   - Build activity features

3. **Join the team**:
   - Set up communication channels
   - Review code standards
   - Attend planning meetings

---

## Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Prisma Docs](https://www.prisma.io/docs)
- [Express Docs](https://expressjs.com/)
- [Socket.io Docs](https://socket.io/docs/)

---

## Support

For questions or issues:
- Create an issue in the repository
- Contact the team lead
- Check existing documentation

Happy coding! 🚀
