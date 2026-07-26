# Nova Tech API Documentation (v1)

Base API URL: `http://localhost:5000/api/v1`

---

## 🔒 Authentication Headers
For protected endpoints, include the JWT Access Token in the Authorization header:
```http
Authorization: Bearer <access_token>
```
Or ensure `refreshToken` cookie is included.

---

## 📑 Global Query Parameters (For Listing Endpoints)

All module listing endpoints support standard query parameters:
- `page`: Page number (default: `1`)
- `limit`: Items per page (default: `10`, max: `100`)
- `search`: Search string (searches titles, names, categories, emails, slugs)
- `sortBy`: Field to order by (default: `createdAt`)
- `sortOrder`: `asc` or `desc` (default: `desc`)
- `status`: Filter by status (`ACTIVE`, `INACTIVE`, `DRAFT`, `PUBLISHED`, `UNREAD`, `READ`, `PENDING`, etc.)
- `category` / `industry`: Filter by specific category

---

## 📌 Standard API Response Structure

### Success Response
```json
{
  "success": true,
  "message": "Data fetched successfully",
  "data": [ ... ],
  "meta": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

---

## 1. ADMIN AUTHENTICATION (`/api/v1/auth`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| POST | `/api/v1/auth/register` | Public | Register new Admin user |
| POST | `/api/v1/auth/login` | Public | Login Admin & receive Tokens |
| POST | `/api/v1/auth/logout` | Protected | Logout & clear refresh token |
| POST | `/api/v1/auth/refresh-token` | Public | Refresh JWT Access Token |
| POST | `/api/v1/auth/forgot-password` | Public | Send password reset email |
| POST | `/api/v1/auth/reset-password` | Public | Reset password with token |
| GET | `/api/v1/auth/me` | Protected | Get current admin profile |
| PUT | `/api/v1/auth/profile` | Protected | Update admin name/email |
| PUT | `/api/v1/auth/change-password` | Protected | Change admin password |
| POST | `/api/v1/auth/upload-avatar` | Protected | Upload profile image (Multer) |

---

## 2. DASHBOARD API (`/api/v1/dashboard`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/dashboard/stats` | Protected | Get overall totals, recent messages, recent projects & breakdown |

---

## 3. SERVICES MODULE (`/api/v1/services`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/services` | Public | Get all services (supports pagination, search, status, category) |
| GET | `/api/v1/services/:idOrSlug` | Public | Get single service details by ID or Slug |
| POST | `/api/v1/services` | Protected | Create new service (supports `image` file upload) |
| PUT | `/api/v1/services/:id` | Protected | Update existing service |
| DELETE | `/api/v1/services/:id` | Protected | Delete service |
| PATCH | `/api/v1/services/:id/status` | Protected | Toggle status (`ACTIVE` / `INACTIVE`) |

---

## 4. PORTFOLIO MODULE (`/api/v1/portfolio`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/portfolio` | Public | Get portfolio items (supports search, industry, status) |
| GET | `/api/v1/portfolio/:idOrSlug` | Public | Get portfolio project details by ID or Slug |
| POST | `/api/v1/portfolio` | Protected | Create portfolio (supports `image` & `gallery` files) |
| PUT | `/api/v1/portfolio/:id` | Protected | Update portfolio project |
| DELETE | `/api/v1/portfolio/:id` | Protected | Delete portfolio project |
| PATCH | `/api/v1/portfolio/:id/status` | Protected | Toggle portfolio status |

---

## 5. TEAM MODULE (`/api/v1/team`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/team` | Public | Get team members |
| GET | `/api/v1/team/:id` | Public | Get team member details |
| POST | `/api/v1/team` | Protected | Create team member (supports `photo` upload) |
| PUT | `/api/v1/team/:id` | Protected | Update team member |
| DELETE | `/api/v1/team/:id` | Protected | Delete team member |
| PATCH | `/api/v1/team/:id/status` | Protected | Toggle team member status |

---

## 6. TESTIMONIALS MODULE (`/api/v1/testimonials`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/testimonials` | Public | Get client testimonials |
| GET | `/api/v1/testimonials/:id` | Public | Get testimonial details |
| POST | `/api/v1/testimonials` | Protected | Create testimonial (supports `photo` upload) |
| PUT | `/api/v1/testimonials/:id` | Protected | Update testimonial |
| DELETE | `/api/v1/testimonials/:id` | Protected | Delete testimonial |
| PATCH | `/api/v1/testimonials/:id/status` | Protected | Toggle testimonial status |

---

## 7. BLOG MODULE (`/api/v1/blog`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/blog` | Public | Get blog posts |
| GET | `/api/v1/blog/:idOrSlug` | Public | Get blog post by ID or Slug |
| POST | `/api/v1/blog` | Protected | Create blog post (supports `featuredImage` upload) |
| PUT | `/api/v1/blog/:id` | Protected | Update blog post |
| DELETE | `/api/v1/blog/:id` | Protected | Delete blog post |
| PATCH | `/api/v1/blog/:id/status` | Protected | Toggle status (`PUBLISHED`/`DRAFT`/`ARCHIVED`) |

---

## 8. FAQ MODULE (`/api/v1/faq`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/faq` | Public | Get FAQ items |
| GET | `/api/v1/faq/:id` | Public | Get FAQ item details |
| POST | `/api/v1/faq` | Protected | Create FAQ item |
| PUT | `/api/v1/faq/:id` | Protected | Update FAQ item |
| DELETE | `/api/v1/faq/:id` | Protected | Delete FAQ item |
| PATCH | `/api/v1/faq/:id/status` | Protected | Toggle FAQ status |

---

## 9. CONTACT MESSAGES MODULE (`/api/v1/contact`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| POST | `/api/v1/contact` | Public | Submit contact form inquiry |
| GET | `/api/v1/contact` | Protected | Get all contact messages |
| GET | `/api/v1/contact/:id` | Protected | View single contact message (auto-sets status to READ) |
| PATCH | `/api/v1/contact/:id/status` | Protected | Update message status (`UNREAD`, `READ`, `REPLIED`, `ARCHIVED`) |
| DELETE | `/api/v1/contact/:id` | Protected | Delete message |

---

## 10. PROJECT REQUEST MODULE (`/api/v1/project-requests`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| POST | `/api/v1/project-requests` | Public | Submit custom project request |
| GET | `/api/v1/project-requests` | Protected | Get all project requests |
| GET | `/api/v1/project-requests/:id` | Protected | Get single project request |
| PATCH | `/api/v1/project-requests/:id/status` | Protected | Update status (`PENDING`, `IN_REVIEW`, `CONTACTED`, `COMPLETED`) |
| DELETE | `/api/v1/project-requests/:id` | Protected | Delete project request |

---

## 11. SETTINGS MODULE (`/api/v1/settings`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/settings` | Public | Get site settings (logo, contact info, socials, footer text) |
| PUT | `/api/v1/settings` | Protected | Update site settings (supports `logo` & `favicon` file uploads) |

---

## 12. HERO SECTION MODULE (`/api/v1/hero`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/hero` | Public | Get hero section content |
| PUT | `/api/v1/hero` | Protected | Update hero section (supports `backgroundImage` upload) |

---

## 13. ABOUT SECTION MODULE (`/api/v1/about`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/about` | Public | Get about section content |
| PUT | `/api/v1/about` | Protected | Update about section (supports `image` upload) |

---

## 14. TECHNOLOGIES MODULE (`/api/v1/technologies`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/technologies` | Public | Get all technologies |
| GET | `/api/v1/technologies/:id` | Public | Get single technology |
| POST | `/api/v1/technologies` | Protected | Create technology (supports `logo` upload) |
| PUT | `/api/v1/technologies/:id` | Protected | Update technology |
| DELETE | `/api/v1/technologies/:id` | Protected | Delete technology |
| PATCH | `/api/v1/technologies/:id/status` | Protected | Toggle technology status |

---

## 15. PARTNERS MODULE (`/api/v1/partners`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/partners` | Public | Get partners |
| GET | `/api/v1/partners/:id` | Public | Get single partner |
| POST | `/api/v1/partners` | Protected | Create partner (supports `logo` upload) |
| PUT | `/api/v1/partners/:id` | Protected | Update partner |
| DELETE | `/api/v1/partners/:id` | Protected | Delete partner |
| PATCH | `/api/v1/partners/:id/status` | Protected | Toggle partner status |

---

## 16. GALLERY MODULE (`/api/v1/gallery`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| GET | `/api/v1/gallery` | Public | Get gallery items |
| GET | `/api/v1/gallery/:id` | Public | Get gallery item details |
| POST | `/api/v1/gallery` | Protected | Create gallery item (supports `image` upload) |
| PUT | `/api/v1/gallery/:id` | Protected | Update gallery item |
| DELETE | `/api/v1/gallery/:id` | Protected | Delete gallery item |
| PATCH | `/api/v1/gallery/:id/status` | Protected | Toggle gallery status |

---

## 17. NEWSLETTER MODULE (`/api/v1/newsletter`)

| Method | Endpoint | Protection | Description |
|---|---|---|---|
| POST | `/api/v1/newsletter/subscribe` | Public | Subscribe email to newsletter |
| GET | `/api/v1/newsletter` | Protected | Get all subscribers |
| PATCH | `/api/v1/newsletter/:id/status` | Protected | Update subscriber status (`SUBSCRIBED` / `UNSUBSCRIBED`) |
| DELETE | `/api/v1/newsletter/:id` | Protected | Delete subscriber |
