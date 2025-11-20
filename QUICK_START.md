# MeetConnect - Quick Reference Card

## 🚀 Essential Commands

### Setup (First Time)
```powershell
# Install all dependencies
npm run install:all

# Set up database
cd backend
npm run db:generate
npm run db:migrate
```

### Development
```powershell
# Run everything
npm run dev:all

# Or run individually:
cd backend && npm run dev      # API: http://localhost:3000
cd web && npm run dev          # Web: http://localhost:5173
cd mobile && npm start         # Mobile: Follow Expo prompts
```

### Database
```powershell
cd backend
npm run db:migrate    # Run migrations
npm run db:generate   # Generate Prisma client
npx prisma studio     # Open database GUI
```

### Testing & Quality
```powershell
npm test              # Run tests
npm run lint          # Lint code
npx prettier --write . # Format code
```

---

## 📁 Key Files

### Configuration
- `backend/.env` - Environment variables (create from .env.example)
- `backend/prisma/schema.prisma` - Database schema
- `mobile/app.json` - Expo configuration
- `web/vite.config.ts` - Web build config

### Documentation
- `docs/GETTING_STARTED.md` - Full setup guide
- `docs/PRD.md` - Product requirements
- `docs/ARCHITECTURE.md` - Technical details
- `docs/ROADMAP.md` - Development plan
- `PROJECT_SUMMARY.md` - This setup overview

### Code Entry Points
- `backend/src/server.ts` - API server
- `web/src/main.tsx` - Web app
- `mobile/app/_layout.tsx` - Mobile app
- `shared/types.ts` - Shared types

---

## 🔧 Common Tasks

### Add API Endpoint
1. Add route in `backend/src/routes/`
2. Create controller logic
3. Update API documentation

### Add Mobile Screen
1. Create file in `mobile/app/`
2. Add components in `mobile/src/components/`
3. Update navigation if needed

### Add Web Page
1. Create file in `web/src/pages/`
2. Add route in `web/src/App.tsx`
3. Build components

### Update Database
1. Edit `backend/prisma/schema.prisma`
2. Run `npm run db:migrate`
3. Update TypeScript types

---

## 🎯 MVP Priorities

1. ✅ User authentication (JWT)
2. ✅ User profiles
3. ✅ Activity creation & listing
4. ✅ Location services
5. ✅ Real-time messaging
6. ✅ Safety features

---

## 🐛 Troubleshooting

### Port in use
```powershell
# Find and kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Database issues
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Run migrations again

### Mobile not loading
```powershell
cd mobile
npm start -- --clear  # Clear cache
```

---

## 📊 Project Stats

- **Languages**: TypeScript, JavaScript
- **Packages**: ~1400+ dependencies
- **Files Created**: 50+ files
- **Lines of Code**: ~3000+ lines
- **Time to MVP**: 3 months (planned)

---

## 🔗 Quick Links

- **Local Backend**: http://localhost:3000
- **Local Web**: http://localhost:5173
- **Health Check**: http://localhost:3000/health

---

## 📞 Need Help?

1. Check `docs/GETTING_STARTED.md`
2. Review `PROJECT_SUMMARY.md`
3. Search documentation
4. Create GitHub issue

---

**Version**: 0.1.0 | **Status**: Ready for Development ✅
