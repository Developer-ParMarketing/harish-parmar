# Harish Parmar Portfolio & Blog

A fullstack portfolio and blog website built with Next.js, React, Tailwind CSS, and an Express/MongoDB backend.

## What is done in this project

- Public portfolio website with:
  - Home page with hero, featured work, personal story, contact section, and quote display.
  - Dedicated pages for About, Contact, Financial Literacy, and Blogs.
  - Blog listing and individual blog pages using slug-based routing.

- Admin dashboard with content management:
  - Admin signup and login flows.
  - Protected blog management routes for creating, editing, publishing, and deleting blogs.
  - Blog dashboard with status filters, search, statistics, and delete actions.
  - Blog form for creating and updating posts.

- Contact handling and lead management:
  - Public contact form submission API.
  - Backend support for viewing, updating, and deleting contact inquiries.

- Blog engagement features:
  - Blog page likes and comment submission.
  - Admin support for draft vs published blog states.

## Tech stack

- Frontend: Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Lucide icons
- Backend: Express, MongoDB, Mongoose, JWT authentication, CORS, cookie-based auth
- Project structure: separate frontend app and backend API server

## Run locally

### Frontend

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend server runs on `http://localhost:5000`.

## API endpoints

- Auth:
  - `POST /api/auth/signup`
  - `POST /api/auth/login`
  - `POST /api/auth/logout`
  - `GET /api/auth/me`
- Blog:
  - `GET /api/blog` - list published blogs
  - `GET /api/blog/:slug` - get a blog by slug
  - `POST /api/blog/:slug/like` - like a blog post
  - `POST /api/blog/:slug/comment` - submit a comment
  - `GET /api/blog/admin/all` - admin blog list (protected)
  - `GET /api/blog/admin/:id` - admin fetch blog by id (protected)
  - `POST /api/blog/admin` - create blog (protected)
  - `PUT /api/blog/admin/:id` - update blog (protected)
  - `DELETE /api/blog/admin/:id/comment/:commentId` - delete blog comment (protected)
  - `DELETE /api/blog/admin/:id` - delete blog (protected)
- Contact:
  - `POST /api/contact` - submit new contact inquiry
  - `GET /api/contact` - list inquiries
  - `GET /api/contact/:id` - get inquiry by id
  - `PATCH /api/contact/:id/status` - update inquiry status
  - `DELETE /api/contact/:id` - delete inquiry

## Notes

- Backend uses a local MongoDB URI configured in `backend/index.js`.
- Admin routes are protected using JWT cookies.
- The frontend uses `app/variables.js` for the API base URL.
