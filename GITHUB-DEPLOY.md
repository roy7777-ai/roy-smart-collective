# 🚀 Deploy to GitHub + Vercel - Step by Step

## 📋 Prerequisites
- GitHub account (create at github.com if you don't have)
- Git installed on your computer
- Node.js installed (download from nodejs.org)

---

## 🎯 COMPLETE DEPLOYMENT GUIDE

### **STEP 1: Setup Project Locally (5 minutes)**

```bash
# 1. Open terminal/command prompt
# Navigate to where you downloaded this folder
cd path/to/roy-smart-collective-site

# 2. Install dependencies
npm install

# 3. Test it works (optional but recommended)
npm start
# Opens http://localhost:3000 in browser
# Press Ctrl+C to stop when done
```

---

### **STEP 2: Create GitHub Repository (3 minutes)**

1. **Go to GitHub**: https://github.com
2. **Login** to your account
3. Click **"New"** button (green, top right) or go to: https://github.com/new
4. **Repository settings**:
   - Repository name: `roy-smart-collective` (or any name you like)
   - Description: "Professional affiliate website for Roy Smart Collective"
   - Select: **Public** (so Vercel can access it for free)
   - **DO NOT** check "Initialize with README" (we already have files)
5. Click **"Create repository"**

GitHub will show you a page with instructions. **Keep this page open!**

---

### **STEP 3: Push Code to GitHub (2 minutes)**

Back to your terminal in the `roy-smart-collective-site` folder:

```bash
# 1. Initialize git (if not already)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit - Roy Smart Collective website"

# 4. Link to your GitHub repo (REPLACE with YOUR username)
git remote add origin https://github.com/YOUR-USERNAME/roy-smart-collective.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

**Enter your GitHub username and password when prompted.**

✅ **Refresh your GitHub repository page** - you should see all files!

---

### **STEP 4: Deploy to Vercel (2 minutes)**

1. **Go to Vercel**: https://vercel.com
2. Click **"Sign Up"** or **"Login"**
3. Select **"Continue with GitHub"**
4. **Authorize Vercel** to access your GitHub

**After login:**

5. Click **"Add New..."** → **"Project"**
6. Find your `roy-smart-collective` repository
7. Click **"Import"**
8. **Leave all settings as default**
9. Click **"Deploy"**

Wait 1-2 minutes... ✅ **DONE!**

You'll get a URL like: `roy-smart-collective.vercel.app`

---

### **STEP 5: Connect Custom Domain royyolo.cloud (5 minutes)**

#### **In Vercel:**

1. Go to your project dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in left sidebar
4. Click **"Add Domain"**
5. Enter: `royyolo.cloud`
6. Click **"Add"**

Vercel will show you DNS records like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Copy these values!**

#### **In MatBao:**

1. Login to MatBao: https://matbao.net
2. Go to **"Quản lý Domain"** (Domain Management)
3. Find `royyolo.cloud` → Click **"Quản lý DNS"** (DNS Management)
4. **Delete** any existing A or CNAME records for @ and www
5. **Add new records** from Vercel:

```
Record 1:
Type: A
Host: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600 (or default)

Record 2:
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

6. **Save changes**

#### **Wait for DNS Propagation:**

- Usually takes **10-30 minutes**
- Sometimes up to **48 hours**
- Check status at: https://www.whatsmydns.net (enter royyolo.cloud)

✅ Once propagated, your site will be live at **royyolo.cloud**!

---

## 🎉 CONGRATULATIONS!

Your website is now:
- ✅ Live on GitHub (version controlled)
- ✅ Deployed on Vercel (with auto-deploy on push)
- ✅ Accessible at royyolo.cloud (your custom domain)
- ✅ Has SSL/HTTPS automatically
- ✅ Hosted on global CDN (fast worldwide)

---

## 🔄 Making Updates Later

Whenever you want to update your website:

```bash
# 1. Make changes to files
# 2. Save changes
# 3. Push to GitHub:

git add .
git commit -m "Description of changes"
git push

# Vercel automatically deploys in 1-2 minutes!
```

---

## 🆘 TROUBLESHOOTING

### **"git: command not found"**
- Download Git: https://git-scm.com/downloads
- Install and restart terminal

### **"npm: command not found"**
- Download Node.js: https://nodejs.org
- Install LTS version
- Restart terminal

### **GitHub Authentication Failed**
- If using 2FA, create a Personal Access Token:
  - GitHub → Settings → Developer settings → Personal access tokens
  - Use token as password

### **Domain not working after 24 hours**
- Double-check DNS records in MatBao
- Make sure you deleted old records
- Contact MatBao support if needed

### **Vercel deployment failed**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in package.json
- Try redeploying

---

## 📞 NEED HELP?

**Vercel Documentation**: https://vercel.com/docs
**GitHub Help**: https://docs.github.com
**MatBao Support**: https://matbao.net/ho-tro

---

## ✅ FINAL CHECKLIST

Before applying to affiliate networks:

- [ ] Website deployed and accessible at royyolo.cloud ✅
- [ ] HTTPS working (green padlock) ✅
- [ ] All pages working (Home, About, Services, Blog, Contact)
- [ ] Legal pages accessible (/legal folder)
- [ ] Professional email setup (contact@royyolo.cloud) ⚠️
- [ ] Mobile responsive (test on phone) ✅
- [ ] Fast loading ✅

---

**Your website is production-ready! 🚀**

Now setup your professional email and start applying to affiliate networks!

Good luck!
Roy Smart Collective Team