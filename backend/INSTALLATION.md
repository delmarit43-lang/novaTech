# Nova Tech Backend Installation & Deployment Guide

This guide provides step-by-step instructions to install, configure, migrate, seed, and run the Nova Tech Backend.

---

## 📋 Prerequisites

Ensure the following tools are installed on your machine:
- **Node.js**: v18.0.0 or higher (Recommended LTS v20+ / v22+)
- **npm**: v9.0.0 or higher
- **PostgreSQL Database Server**: running locally (this machine uses port **5433**, not 5432)
- **Git**: For version control management

---

## 🛠 Step 1: PostgreSQL Setup

Ensure PostgreSQL is running and create the database `nova_tech`.

If using PostgreSQL CLI (psql):
```sql
CREATE DATABASE nova_tech;
```

Credentials used by default:
- **User**: `postgres`
- **Password**: `9898`
- **Host**: `localhost`
- **Port**: `5433` (check with `netstat` if connection fails)
- **Database**: `nova_tech`

---

## 📥 Step 2: Install Node Dependencies

Navigate into the `backend/` directory and execute:

```bash
cd backend
npm install
```

---

## ⚙️ Step 3: Configure Environment Variables

Create `.env` file inside `backend/` directory by copying from `.env.example`:

```bash
cp .env.example .env
```

Verify your `DATABASE_URL` matches your local PostgreSQL instance:
```env
DATABASE_URL="postgresql://postgres:9898@localhost:5433/nova_tech?schema=public"
```

---

## 🗄️ Step 4: Run Prisma Database Migrations & Generation

Generate Prisma Client and push database models to PostgreSQL:

```bash
# Generate Prisma Client
npm run prisma:generate

# Sync Database Schema with PostgreSQL
npm run prisma:push
```

Optionally run database migration history:
```bash
npm run prisma:migrate
```

---

## 🌱 Step 5: Seed Initial Data

Populate the database with default settings, hero data, services, technologies, testimonials, blog posts, and the default admin account:

```bash
npm run seed
```

Default Credentials Generated:
- **Admin Email**: `admin@novatech.com`
- **Admin Password**: `password123`

---

## 🚀 Step 6: Start Server

### Development Mode (with hot-reload using nodemon):
```bash
npm run dev
```

### Production Mode:
```bash
npm run start
```

---

## 🛠 Useful NPM Commands Reference

| Command | Description |
|---|---|
| `npm run dev` | Start development server with live reload (`nodemon`) |
| `npm run start` | Start server in production mode |
| `npm run prisma:generate` | Generate Prisma Client types |
| `npm run prisma:migrate` | Create and apply database migrations |
| `npm run prisma:push` | Push schema directly to database without creating migration files |
| `npm run prisma:studio` | Launch interactive Prisma Studio GUI to view/edit database records |
| `npm run seed` | Seed initial admin, settings, and sample data |
