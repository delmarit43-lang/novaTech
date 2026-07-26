# Nova Tech Official Enterprise Backend Service

Production-ready, ultra-clean REST API backend powering the official Nova Tech platform. Built using modern enterprise architecture, Node.js (ES Modules), Express.js, Prisma ORM, and PostgreSQL.

---

## 🚀 Key Features & Highlights

- **Enterprise Layered Architecture**: Clean separation of Controllers, Services, Route Handlers, Zod Validators, and Prisma Data Access.
- **Full Admin Authentication Suite**:
  - JWT Access Token & Refresh Token Rotation
  - Password Hashing with bcrypt (12 rounds)
  - Cookie Parser HTTP-Only Cookie Support
  - Forgot Password & Reset Token flow with Nodemailer SMTP
  - Change Password, Update Profile, & Profile Image Upload
- **Complete CRUD & Management Modules (15 Modules)**:
  1. Admin Authentication (`/api/v1/auth`)
  2. Dashboard Analytics & Statistics (`/api/v1/dashboard`)
  3. Services Engine (`/api/v1/services`)
  4. Portfolio Showcase (`/api/v1/portfolio`)
  5. Executive Team (`/api/v1/team`)
  6. Client Testimonials (`/api/v1/testimonials`)
  7. Enterprise Tech Blog (`/api/v1/blog`)
  8. Interactive FAQ (`/api/v1/faq`)
  9. Contact Inquiries & Auto-Reply (`/api/v1/contact`)
  10. Custom Project Requests (`/api/v1/project-requests`)
  11. Site Settings & Branding (`/api/v1/settings`)
  12. Hero Section CMS (`/api/v1/hero`)
  13. About Section CMS (`/api/v1/about`)
  14. Technology Stack (`/api/v1/technologies`)
  15. Industry Partners (`/api/v1/partners`)
  16. Media Gallery (`/api/v1/gallery`)
  17. Newsletter Subscriptions (`/api/v1/newsletter`)
- **Admin Panel Query Superpowers**:
  - Full Pagination (`page`, `limit`, `total`, `totalPages`, `hasNextPage`, `hasPrevPage`)
  - Universal Multi-Field Search (`search` across names, titles, categories, emails, slugs)
  - Sorting (`sortBy`, `sortOrder` asc/desc)
  - Filtering (`status`, `category`, `industry`, `featured`, `rating`)
  - Status Toggle endpoints (`PATCH /:id/status`)
- **Security & Performance Stack**:
  - **Helmet** for HTTP security headers
  - **CORS** configuration for frontend domain protection
  - **Express Rate Limit** for DDoS & brute-force protection
  - **Gzip Compression** for minimal payload overhead
  - **Zod Runtime Schema Validation** on every request body, query, and parameter
  - **Global Centralized Error Handling** with custom `ApiError` format

---

## 📁 Directory Architecture

```
backend/
├── src/
│   ├── config/
│   │   ├── env.js             # Environment Variable Loader & Defaults
│   │   ├── multer.js          # File Upload Engine & Mime Validation
│   │   └── nodemailer.js      # Transporter Configuration & Diagnostics
│   ├── database/
│   │   └── prisma.js          # Prisma Client Singleton Instance
│   ├── middlewares/
│   │   ├── auth.middleware.js # JWT Route Protection & User Hydration
│   │   ├── error.middleware.js# Global Centralized Error Handling Middleware
│   │   ├── rateLimiter.middleware.js # Rate Limiting Guards
│   │   ├── upload.middleware.js      # Multer Request Wrapper
│   │   └── validate.middleware.js    # Zod Input Validation Wrapper
│   ├── controllers/           # HTTP Handlers (17 Controllers)
│   ├── services/              # Business Logic & Database Queries (18 Services)
│   ├── routes/                # Express API v1 Route Endpoints (18 Routers)
│   ├── utils/
│   │   ├── apiError.js        # Standardized Error Instance
│   │   ├── apiResponse.js     # Standardized JSON Response Formatter
│   │   ├── asyncHandler.js    # Async Error Catch Wrapper
│   │   ├── helpers.js         # Slugify, Pagination, & Query Builders
│   │   └── jwt.js             # Token Sign/Verify Core
│   ├── validators/            # Zod Validation Schemas (16 Schemas)
│   ├── app.js                 # Express Application Middleware Setup
│   └── server.js              # Server Bootstrap & Graceful Shutdown
├── uploads/                   # Statically Served Media & Document Storage
├── prisma/
│   ├── schema.prisma          # PostgreSQL Prisma Database Schema
│   └── seed.js                # Database Seed Script
├── .env                       # Local Environment Variables
├── .env.example               # Environment Template
├── package.json               # Node.js Package Manifest
├── INSTALLATION.md            # Step-by-Step Installation Guide
├── ENV_VARIABLES.md           # Environment Configuration Reference
└── API_DOCUMENTATION.md       # Comprehensive Endpoints Documentation
```

---

## ⚡ Quick Start

```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Generate Prisma Client
npm run prisma:generate

# 4. Push Database Schema to PostgreSQL
npm run prisma:push

# 5. Seed initial data & default admin user
npm run seed

# 6. Start development server
npm run dev
```

Server runs on: **`http://localhost:5000`**  
API Endpoint: **`http://localhost:5000/api/v1`**

Default Admin Login:
- **Email**: `admin@novatech.com`
- **Password**: `password123`
