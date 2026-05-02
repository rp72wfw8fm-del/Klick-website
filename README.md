# Klick Website

A modern, responsive web platform for connecting customers with trusted service providers. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

### Public Pages
- **Landing Page** — Marketing homepage with hero section, features showcase, and CTAs
- **Blog** — Content hub with articles, categories, and newsletter subscription
- **Support Center** — FAQs, contact options, and help resources

### User Dashboard
- **Customer Mode** — Search workers, view profiles, book services, track job history
- **Worker Mode** — Manage job requests, track earnings, view active jobs

### Admin Dashboard
- **Overview** — Key metrics and analytics
- **User Management** — View and manage all users
- **Transaction History** — Track all payments
- **Dispute Management** — Handle customer/worker disputes

## 🚀 Tech Stack

- **Frontend:** React 19, Vite 8
- **Styling:** Tailwind CSS 3
- **Routing:** React Router 6
- **Icons:** Lucide React
- **Build Tool:** Vite

## 📁 Project Structure

```
klick-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Admin.jsx
│   │   ├── Blog.jsx
│   │   └── Support.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Branding

- **Primary Color:** #0066FF (Vibrant Blue)
- **Secondary Color:** #00B4A0 (Teal)
- **Font:** System UI (Segoe UI, Roboto)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Pages

### Home (`/`)
Landing page with hero section, features, and CTAs

### Dashboard (`/dashboard`)
Web app with customer and worker modes

### Admin (`/admin`)
Management system with analytics and user management

### Blog (`/blog`)
Content hub with articles and newsletter

### Support (`/support`)
Help center with FAQs and contact options

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📄 License

© 2026 Klick. All rights reserved. Owned by Bitson.
