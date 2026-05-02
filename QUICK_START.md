# Klick Website - Quick Start Deployment

## 📦 What You Have

- **dist/** - Production-ready website files (ready to upload)
- **DEPLOYMENT_GUIDE.md** - Complete deployment instructions for all server types
- **klick-website-dist.tar.gz** - Compressed archive for easy download

## 🚀 Quick Deploy (Choose One)

### For Nginx on Linux/Ubuntu
```bash
# Upload dist/ to /var/www/klick
# Then run:
sudo nano /etc/nginx/sites-available/klick
# Copy configuration from DEPLOYMENT_GUIDE.md
sudo systemctl restart nginx
```

### For Apache on Linux/Ubuntu
```bash
# Upload dist/ to /var/www/klick
# Then run:
sudo a2enmod rewrite
sudo a2enmod headers
# Copy configuration from DEPLOYMENT_GUIDE.md
sudo systemctl restart apache2
```

### For Node.js
```bash
# Upload entire project
cd klick-website
npm install --production
npm start
```

### For Windows IIS
1. Upload dist/ to C:\inetpub\wwwroot\klick
2. Configure IIS (see DEPLOYMENT_GUIDE.md)
3. Restart IIS

## 📋 Files to Upload

**Minimum files needed:**
- `dist/index.html`
- `dist/assets/` (all files)

**Total size:** ~500KB

## 🔗 Domain Setup

1. Get your server IP: `curl ifconfig.me`
2. Update DNS A record: `klick.app` → `your.server.ip`
3. Wait 5-48 hours for DNS propagation
4. Visit `https://klick.app`

## ✅ Verification

After deployment, test:
- [ ] Homepage loads
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] HTTPS works
- [ ] No console errors

## 📞 Need Help?

**Contact Bitson (Owner):** 0554159515

See DEPLOYMENT_GUIDE.md for detailed instructions for your specific server setup.
