# Klick Website - Deployment Guide

Complete guide for deploying the Klick website to your own server.

---

## 📋 Quick Start

1. **Build the website** (already done): `npm run build`
2. **Upload files** from `dist/` folder to your server
3. **Configure your web server** (see below for your server type)
4. **Point your domain** to your server
5. **Test and go live!**

---

## 🖥️ Deployment Options

### Option 1: Linux/Ubuntu with Nginx

#### Prerequisites
- Ubuntu 20.04+ or similar Linux
- Nginx installed
- SSH access to your server

#### Step 1: Upload Files via SFTP

```bash
# On your local machine
sftp user@your-server.com
cd /var/www
put -r dist klick
exit
```

Or use an SFTP client like FileZilla:
1. Host: `your-server.com`
2. Username: `your-username`
3. Password: `your-password`
4. Upload `dist/` folder to `/var/www/klick`

#### Step 2: Configure Nginx

SSH into your server:
```bash
ssh user@your-server.com
```

Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/klick
```

Paste this configuration:
```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name klick.app www.klick.app;
    
    root /var/www/klick;
    index index.html;
    
    # Serve static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing - send all requests to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/klick /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 3: Enable HTTPS (SSL)

Install Certbot:
```bash
sudo apt-get install certbot python3-certbot-nginx
```

Get free SSL certificate:
```bash
sudo certbot --nginx -d klick.app -d www.klick.app
```

---

### Option 2: Linux/Ubuntu with Apache

#### Prerequisites
- Ubuntu 20.04+ or similar Linux
- Apache installed
- SSH access to your server

#### Step 1: Upload Files via SFTP

```bash
sftp user@your-server.com
cd /var/www
put -r dist klick
exit
```

#### Step 2: Configure Apache

SSH into your server:
```bash
ssh user@your-server.com
```

Create Apache configuration:
```bash
sudo nano /etc/apache2/sites-available/klick.conf
```

Paste this configuration:
```apache
<VirtualHost *:80>
    ServerName klick.app
    ServerAlias www.klick.app
    
    DocumentRoot /var/www/klick
    
    <Directory /var/www/klick>
        Options -MultiViews
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^ index.html [QSA,L]
    </Directory>
    
    # Cache static files
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
    
    ErrorLog ${APACHE_LOG_DIR}/klick-error.log
    CustomLog ${APACHE_LOG_DIR}/klick-access.log combined
</VirtualHost>
```

Enable the site:
```bash
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2ensite klick
sudo apache2ctl configtest
sudo systemctl restart apache2
```

#### Step 3: Enable HTTPS (SSL)

Install Certbot:
```bash
sudo apt-get install certbot python3-certbot-apache
```

Get free SSL certificate:
```bash
sudo certbot --apache -d klick.app -d www.klick.app
```

---

### Option 3: Node.js Server

#### Prerequisites
- Node.js 18+ installed
- npm installed
- SSH access to your server

#### Step 1: Upload Project

```bash
sftp user@your-server.com
cd /home/username
put -r klick-website klick-website
exit
```

#### Step 2: Install Dependencies

SSH into your server:
```bash
ssh user@your-server.com
cd klick-website
npm install --production
```

#### Step 3: Create Express Server

Create `server.js`:
```javascript
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('dist'));

// SPA routing
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
  console.log(`Klick website running on port ${PORT}`);
});
```

#### Step 4: Setup PM2 (Process Manager)

Install PM2:
```bash
npm install -g pm2
```

Start the server:
```bash
pm2 start server.js --name "klick-website"
pm2 save
pm2 startup
```

#### Step 5: Configure Nginx as Reverse Proxy

Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/klick
```

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name klick.app www.klick.app;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/klick /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

### Option 4: Windows Server with IIS

#### Prerequisites
- Windows Server 2016+
- IIS installed
- RDP access to your server

#### Step 1: Upload Files

Use Remote Desktop to connect to your server:
1. Open File Explorer
2. Navigate to `C:\inetpub\wwwroot`
3. Create folder `klick`
4. Upload `dist/` contents to `C:\inetpub\wwwroot\klick`

#### Step 2: Configure IIS

1. Open IIS Manager
2. Right-click "Sites" → "Add Website"
3. Fill in:
   - **Site name:** Klick
   - **Physical path:** `C:\inetpub\wwwroot\klick`
   - **Host name:** `klick.app`
4. Click OK

#### Step 3: Configure URL Rewriting

1. Select the Klick website
2. Double-click "URL Rewrite"
3. Click "Add Rule(s)" → "Blank rule"
4. Fill in:
   - **Name:** SPA Routing
   - **Pattern:** `.*`
   - **Conditions:** Add condition: `{REQUEST_FILENAME}` is not a file
   - **Action:** Rewrite to `index.html`
5. Click Apply

#### Step 4: Enable HTTPS

1. Right-click website → "Edit Bindings"
2. Click "Add"
3. Select HTTPS, choose SSL certificate
4. Click OK

---

## 🌐 Domain Setup

### Point Your Domain to Your Server

1. **Get your server's IP address:**
   ```bash
   # On your server
   curl ifconfig.me
   ```

2. **Update DNS records** at your domain registrar:
   - **A Record:** `klick.app` → `your.server.ip`
   - **A Record:** `www.klick.app` → `your.server.ip`
   - **CNAME:** `www` → `klick.app` (alternative)

3. **Wait for DNS propagation** (5-48 hours)

4. **Test your domain:**
   ```bash
   nslookup klick.app
   ```

---

## 🔒 Security Checklist

- [ ] Enable HTTPS/SSL certificate
- [ ] Set up firewall rules
- [ ] Configure automatic backups
- [ ] Enable DDoS protection
- [ ] Set up monitoring and alerts
- [ ] Configure log rotation
- [ ] Keep server software updated
- [ ] Use strong passwords
- [ ] Enable 2FA for server access

---

## 📊 Monitoring & Maintenance

### Monitor Server Health

```bash
# Check disk space
df -h

# Check memory usage
free -h

# Check CPU usage
top

# Check Nginx status
sudo systemctl status nginx

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
```

### Update Website

To deploy new changes:

1. Build locally:
   ```bash
   npm run build
   ```

2. Upload new `dist/` files to server

3. Clear browser cache or restart web server

---

## 🆘 Troubleshooting

### Website shows 404 error
- Check file permissions: `sudo chmod -R 755 /var/www/klick`
- Verify web server is running: `sudo systemctl status nginx`
- Check web server configuration

### HTTPS not working
- Verify SSL certificate is installed
- Check firewall allows port 443
- Verify domain DNS is pointing to server

### Website is slow
- Check server resources (CPU, memory, disk)
- Enable gzip compression in web server
- Optimize images in website
- Use CDN for static files

### Can't connect to server
- Verify server is running
- Check firewall rules
- Verify SSH/RDP credentials
- Check server IP address

---

## 📞 Support

For issues or questions:
- **Phone:** 0554159515 (Bitson - Owner)
- Email: support@klick.app
- Documentation: See README.md

---

## 📝 Deployment Checklist

- [ ] Server is running and accessible
- [ ] Web server is installed and configured
- [ ] Files uploaded to correct directory
- [ ] Domain DNS configured
- [ ] HTTPS/SSL certificate installed
- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Links and navigation work
- [ ] Mobile responsive design works
- [ ] Performance is acceptable
- [ ] Backups are configured
- [ ] Monitoring is enabled

---

## 🎉 You're Done!

Your Klick website is now live! Visit `https://klick.app` to see it in action.

Next steps:
1. Test all features thoroughly
2. Set up analytics (Google Analytics)
3. Configure email notifications
4. Set up automated backups
5. Monitor performance
