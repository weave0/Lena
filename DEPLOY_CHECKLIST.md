# 🚀 Quick Deployment Checklist

## ✅ Completed Setup

- [x] Git repository created and connected
- [x] Railway project connected to GitHub
- [x] Dockerfile configured for backend
- [x] Nginx configuration created
- [x] Environment variable templates created
- [x] Build scripts optimized
- [x] Auto-deployment configured (pushes to main)

---

## 📋 Next Steps (Do These Now!)

### 1. Railway Backend Setup (5 minutes)

1. **Go to Railway Dashboard**: https://railway.app/dashboard
2. **Find your Lena project**
3. **Add PostgreSQL**:
   - Click "+ New"
   - Select "Database" → "PostgreSQL"
   - Railway auto-connects it!

4. **Add Environment Variables**:
   - Click your service
   - Go to "Variables" tab
   - Add these:
     ```
     JWT_SECRET=<generate random string here>
     NODE_ENV=production
     PORT=3000
     ```

5. **Watch the deployment**:
   - Go to "Deployments" tab
   - Wait for build to complete (~2-3 minutes)
   - Copy your deployment URL!

### 2. Deploy Web App to Vercel (3 minutes)

```bash
# In your terminal:
cd web
npx vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? lena-web
# - Which directory? ./
# - Override settings? No
```

After deployment:
- Go to Vercel dashboard
- Add environment variable:
  - `VITE_API_URL` = (your Railway backend URL)
- Redeploy!

### 3. Run Database Migrations

In Railway dashboard:
- Click your backend service
- Go to "Settings" tab
- Scroll to "Deploy"
- Add to "Build Command": `npm install --legacy-peer-deps && npx tsc`
- Add to "Start Command": `npx prisma migrate deploy && node dist/server.js`
- Save and redeploy!

---

## 🎯 Quick Test

Once deployed:

1. **Test Backend**:
   ```bash
   curl https://your-backend.railway.app/health
   # Should return: {"status":"ok"}
   ```

2. **Test Frontend**:
   - Visit your Vercel URL
   - Should see the beautiful Lena homepage!

3. **Test API Connection**:
   - Open browser console on your frontend
   - Check for any connection errors
   - Verify CORS is working

---

## 🔧 If Something Breaks

### Railway Build Fails:
1. Check logs in Railway dashboard
2. Verify Dockerfile is correct
3. Check if all dependencies are listed in package.json

### Web App Shows Blank Page:
1. Check Vercel build logs
2. Verify `VITE_API_URL` is set correctly
3. Check browser console for errors

### Can't Connect to Database:
1. Verify PostgreSQL is provisioned in Railway
2. Check if `DATABASE_URL` variable exists
3. Try manual migration: `npx prisma migrate deploy`

---

## 📱 Mobile App (Later)

When ready to deploy mobile:

```bash
cd mobile

# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build
eas build --platform all --profile production

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

---

## 🎉 Success Criteria

You'll know everything is working when:

- ✅ Railway shows "Deployed Successfully"
- ✅ Backend health endpoint returns 200 OK
- ✅ Web app loads and looks beautiful
- ✅ No errors in browser console
- ✅ Database is connected and migrations ran
- ✅ You can see "Lena" in your browser! 🌟

---

## ⏱️ Estimated Time

- **Railway Setup**: 5 minutes
- **Vercel Deployment**: 3 minutes
- **Database Migration**: 2 minutes
- **Testing**: 5 minutes

**Total: ~15 minutes to fully deployed!** 🚀

---

## 🆘 Need Help?

1. Check Railway logs
2. Check Vercel deployment logs  
3. Review DEPLOYMENT_STATUS.md for detailed guides
4. Check GitHub Actions (if you set it up)

---

**Ready? Let's deploy! 🎯**

Current status: **Code is pushed and ready!**
Next step: **Add environment variables in Railway!**
