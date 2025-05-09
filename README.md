# Doc PoC

This is a demo project using:

- **Strapi** for backend (API & CMS)
- **Nuxt 3** for frontend
- **Redis** for caching
- **Docker Compose** to run everything together

---

## 🧩 How to Run

```bash
cd docker
docker-compose up -d
```

This will start:
- Backend (Strapi Admin): http://localhost:1337/admin
- Frontend (Nuxt):        http://localhost:3000

---

## 🔐 Strapi Admin Login

- Email:    admin@gmail.com
- Password: admiN2025

---

## ⚠️ If Frontend Doesn’t Show Data

1. Go to: http://localhost:1337/admin/settings/users-permissions/roles/2  
2. Scroll to the "Site" collection  
3. Enable:
   - [x] find  
   - [x] findOne  
4. Click "Save"

---

✅ You're good to go!
