# Lena - Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

Your Lena web app is ready to deploy to Netlify! Follow these steps:

### Option 1: Deploy via Netlify Web Interface (Recommended)

1. **Go to**: https://app.netlify.com/start
2. **Click**: "Import from Git"
3. **Select**: GitHub
4. **Choose repository**: `weave0/Lena`
5. **Configure build settings**:
   - **Base directory**: `web`
   - **Build command**: `npm run build`
   - **Publish directory**: `web/dist`
   - **Node version**: `20`

6. **Add environment variable**:
   - Key: `VITE_API_URL`
   - Value: `https://your-backend.railway.app` (get from Railway dashboard)

7. **Click**: "Deploy site"

### Option 2: Deploy via GitHub Integration

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `weave0/Lena`
4. Netlify will auto-detect the `netlify.toml` configuration
5. Add the `VITE_API_URL` environment variable
6. Deploy!

### Option 3: Manual Deploy (if CLI works)

```bash
cd web
npm run build
netlify deploy --prod --dir=dist
```

## ✅ What's Configured

- ✅ `netlify.toml` with optimal build settings
- ✅ Production build tested and working
- ✅ SPA routing configured (redirects to index.html)
- ✅ API proxy rules for backend communication
- ✅ Environment variables setup
- ✅ Global CDN distribution

## 🌍 After Deployment

Your app will be live at:
- `https://your-site-name.netlify.app`

Features available:
- 🎨 Beautiful cosmic UI
- 🌍 8-language support (i18n)
- 🔐 Full authentication system
- 📱 Responsive design
- ⚡ Lightning-fast global CDN

## 🔧 Update Backend URL

After deploying, update the `VITE_API_URL` in Netlify:
1. Go to Site settings → Environment variables
2. Add/update `VITE_API_URL` with your Railway backend URL
3. Redeploy (Netlify will auto-rebuild)

## 🎯 Continuous Deployment

Every push to `main` branch will automatically:
1. Trigger Netlify rebuild
2. Deploy new version
3. Go live in ~2 minutes

**Your Lena app is production-ready!** 🚀
