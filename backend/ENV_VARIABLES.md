# Environment Variables Reference Guide

This document details all environment variables used by the Nova Tech Backend Service.

---

## 🌐 Server Settings

| Variable | Description | Default Value | Required |
|---|---|---|---|
| `PORT` | HTTP Server Listening Port | `5000` | No |
| `NODE_ENV` | Environment stage (`development` or `production`) | `development` | No |
| `API_VERSION` | Base URL path versioning prefix | `v1` | No |
| `CORS_ORIGIN` | Allowed client origins (comma separated or URL) | `http://localhost:5173,http://localhost:3000` | No |

---

## 🗄️ Database Settings

| Variable | Description | Example Value | Required |
|---|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:9898@localhost:5433/nova_tech?schema=public` | **Yes** |

---

## 🔐 Authentication & Security

| Variable | Description | Default Value | Required |
|---|---|---|---|
| `JWT_SECRET` | Secret key for signing Access Tokens | `nova_tech_super_secret_jwt_access_key_2026_prod` | **Yes in Production** |
| `JWT_EXPIRES_IN` | Duration access token remains valid | `1d` | No |
| `REFRESH_TOKEN_SECRET` | Secret key for signing Refresh Tokens | `nova_tech_super_secret_refresh_key_2026_prod` | **Yes in Production** |
| `REFRESH_TOKEN_EXPIRES_IN` | Duration refresh token remains valid | `7d` | No |
| `RESET_PASSWORD_EXPIRES_MS` | Reset token expiration time (ms) | `3600000` (1 hour) | No |

---

## 📁 File Upload Settings

| Variable | Description | Default Value | Required |
|---|---|---|---|
| `MAX_FILE_SIZE` | Maximum file size in bytes (10MB default) | `10485760` | No |
| `UPLOAD_PATH` | Storage directory relative to project root | `uploads` | No |

---

## 📧 Email / Nodemailer SMTP Settings

| Variable | Description | Example Value | Required |
|---|---|---|---|
| `SMTP_HOST` | Mail server hostname | `smtp.gmail.com` | No |
| `SMTP_PORT` | Mail server port (`587` or `465`) | `587` | No |
| `SMTP_USER` | SMTP username / email address | `noreply.novatech@gmail.com` | For Email sending |
| `SMTP_PASS` | SMTP password / App password | `your_app_password` | For Email sending |
| `EMAIL_FROM` | Default sender display name and email | `"Nova Tech <noreply.novatech@gmail.com>"` | No |
