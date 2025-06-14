# Store Next Beta – Modern E-commerce with Next.js

<img width="1315" alt="Screenshot 2025-06-14 at 14 56 42" src="https://github.com/user-attachments/assets/4b133e1c-73ab-42c6-a31a-1370738e1f65" /><img width="1246" alt="Screenshot 2025-06-14 at 14 57 07" src="https://github.com/user-attachments/assets/d3f7ead5-1833-432d-bbc0-c26637668c38" /><img width="1254" alt="Screenshot 2025-06-14 at 14 58 00" src="https://github.com/user-attachments/assets/0c685a53-9237-4976-b459-7c85dde78501" /><img width="1241" alt="Screenshot 2025-06-14 at 14 59 55" src="https://github.com/user-attachments/assets/ddd94197-4947-43ff-936a-6610845d18f7" /><img width="1250" alt="Screenshot 2025-06-14 at 15 00 18" src="https://github.com/user-attachments/assets/e663e154-23b0-401b-8b8c-debe6071ae89" /><img width="1244" alt="Screenshot 2025-06-14 at 15 00 40" src="https://github.com/user-attachments/assets/cbea298a-9ae3-4648-a0ce-328878a24279" /><img width="1239" alt="Screenshot 2025-06-14 at 15 00 51" src="https://github.com/user-attachments/assets/4746c5d4-cd07-4216-8a0c-d921b7ec1f0f" /><img width="1247" alt="Screenshot 2025-06-14 at 15 01 26" src="https://github.com/user-attachments/assets/cdecde19-de05-43a2-a280-f174b8deffc6" />

A beautifully designed, high-performance e-commerce platform built with Next.js, Prisma, Supabase, Clerk authentication, Stripe payments, and shadcn/ui. Store Next offers a seamless online shopping experience with fast checkout, secure payments, and a curated selection of products.

**Online-Live:** https://store-next-beta.vercel.app/

---

## 🚀 Features & Functionalities

- **Modern Next.js 14 App Router**: Server and client components, layouts, and API routes.
- **TypeScript**: Type safety and maintainability.
- **Prisma ORM**: Type-safe database access and migrations.
- **Supabase**: Scalable Postgres database and storage (Supabase Buckets for image uploads).
- **Clerk Authentication**: Secure, easy sign-up/sign-in with Google, GitHub, email, etc.
- **Stripe Payments**: Secure checkout and payment processing (integrate via Stripe dashboard and API keys).
- **shadcn/ui**: Beautiful, accessible UI components.
- **Dark Mode**: Toggle between light and dark themes with next-themes.
- **Responsive Design**: Mobile-first, works on all devices.
- **Product Management**: CRUD for admins, image upload, featured products.
- **Favorites, Cart, Orders, Reviews**: Save favorites, manage cart, view orders, submit reviews.
- **Admin Dashboard**: Admin-only access to sales, product management, analytics.
- **SEO Optimized**: Open Graph and Twitter meta tags, meta image for rich previews.
- **Easy Deployment**: Vercel ready, CI/CD friendly.

---

## 🗂️ Project Structure

```sh
.
├── app/                # Next.js app directory (pages, layouts, API routes)
├── components/         # Reusable UI and feature components
├── lib/                # Utility functions
├── prisma/             # Prisma schema, seed, and product data
├── public/             # Static assets (logo, images)
├── utils/              # Actions, DB, formatting, types, schemas
├── middleware.ts       # Clerk authentication middleware
├── next.config.mjs     # Next.js config (image domains, etc.)
├── tailwind.config.ts  # Tailwind CSS config
├── README.md           # Project documentation
└── ...
```

---

## 🛠️ Tech Stack & Integrations

- **Next.js 14**: App Router, server actions, layouts, and API routes.
- **TypeScript**: Static typing for reliability.
- **Prisma**: Database ORM, migrations, and type-safe queries.
- **Supabase**: PostgreSQL database, authentication, and storage (buckets for image uploads).
- **Supabase Buckets**: Store and serve product images securely.
- **Clerk**: Authentication (Google, GitHub, email, etc.), user management, admin checks.
- **Stripe**: Payment processing, checkout, and order management.
- **shadcn/ui**: Modern, accessible UI components.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Icons**: Icon library.
- **Vercel**: Deployment and hosting.

---

## 📸 Screenshots

<!-- Keep your existing screenshot images or demo GIFs here! -->

---

## 📝 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create both `.env` and `.env.local` files in the root directory. Here’s what you need and how to get them:

#### **.env / .env.local Example**

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key   # From Clerk dashboard
CLERK_SECRET_KEY=your_clerk_secret_key                         # From Clerk dashboard
ADMIN_USER_ID=your_clerk_admin_user_id                         # Get from Clerk user profile

# Supabase
SUPABASE_URL=your_supabase_project_url                         # From Supabase project settings
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key       # From Supabase project API settings
SUPABASE_BUCKET=your_supabase_bucket_name                      # Create in Supabase Storage > Buckets
SUPABASE_UPLOAD_URL=your_supabase_upload_url                   # Usually: https://<project>.supabase.co/storage/v1/object/sign/<bucket>

# Database
DATABASE_URL=your_supabase_database_url                        # From Supabase > Settings > Database
DIRECT_URL=your_supabase_direct_url                            # From Supabase > Settings > Database

# Stripe (for payments)
STRIPE_SECRET_KEY=your_stripe_secret_key                       # From Stripe dashboard
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key             # From Stripe dashboard
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret               # From Stripe dashboard (for webhooks)
```

**How to get these values:**

- **Clerk:** Go to your Clerk dashboard > API Keys. Copy the publishable and secret keys. For `ADMIN_USER_ID`, log in as your admin user and copy the user ID from the Clerk dashboard.
- **Supabase:** Go to your Supabase project > Project Settings > API. Copy the project URL and service role key. For buckets, go to Storage > Create a new bucket (e.g., `product-images`).
- **Stripe:** Go to your Stripe dashboard > Developers > API keys. Copy the secret and publishable keys. For webhooks, set up a webhook endpoint and copy the secret.

> **Note:** Never commit your `.env` or `.env.local` files to version control. They should be in your `.gitignore`.

---

## 🛒 Main Functionalities

- **Browse Products:** Grid and list views, search, and filtering.
- **Product Details:** View product info, images, reviews, and add to cart.
- **Cart & Checkout:** Add/remove items, view totals, proceed to checkout, pay with Stripe.
- **Favorites:** Mark/unmark products as favorites.
- **Orders:** View past orders and order details.
- **Reviews:** Submit and view product reviews.
- **Admin Dashboard:** Manage products, view sales, analytics (admin only).
- **Authentication:** Sign up, sign in, sign out (Google, GitHub, email, etc.).
- **Dark Mode:** Toggle between light and dark themes.
- **Image Upload:** Upload product images to Supabase bucket securely.
- **SEO & Social:** Open Graph, Twitter meta tags, and meta image for rich previews.

---

## 🔐 Admin Access & Security

- Only the user with `ADMIN_USER_ID` (set in `.env`) can access `/admin` routes and see the dashboard link.
- Admin checks are enforced in server components and UI.
- Clerk middleware ensures authentication for all protected routes.

---

## 🧩 Folder Highlights

- `app/` – All routes, layouts, and pages (including admin, cart, checkout, products, reviews, etc.)
- `components/` – UI and feature components (navbar, forms, product cards, etc.)
- `prisma/` – Prisma schema, seed script, and product data
- `public/` – Static assets (logo, images)
- `utils/` – Actions, DB instance, formatting, types, schemas

---

## 🛠️ Integrations & How to Set Up

### **Supabase**

- Go to [Supabase](https://supabase.com/) and create a new project.
- Get your project URL and service role key from Project Settings > API.
- Go to Storage > Create a new bucket (e.g., `product-images`).
- Use the bucket name and upload URL in your `.env`.
- Use Supabase SQL editor or Prisma migrations to manage your database schema.

### **Prisma**

- Install Prisma CLI: `npm install prisma --save-dev`
- Initialize: `npx prisma init`
- Edit `prisma/schema.prisma` to define your models (e.g., Product, User, Order, Review).
- Run migrations: `npx prisma migrate dev --name init`
- Push schema: `npx prisma db push`
- Seed data: `node prisma/seed`

### **Supabase Buckets (Image Upload)**

- In Supabase dashboard, go to Storage > Buckets > Create bucket (e.g., `product-images`).
- Set public/private as needed.
- Use Supabase client or API to upload images from your app.
- Store image URLs in your database (Prisma model).

### **Clerk Authentication**

- Go to [Clerk](https://clerk.com/) and create a new application.
- Copy your publishable and secret keys to `.env`.
- Set up social providers (Google, GitHub, etc.) in Clerk dashboard.
- Use Clerk components (`SignInButton`, `SignUpButton`, `SignedIn`, `SignedOut`) in your app.
- Protect admin routes by checking `userId` against `ADMIN_USER_ID`.

### **Stripe Payments**

- Go to [Stripe](https://dashboard.stripe.com/) and create an account.
- Get your API keys and webhook secret from Developers > API keys.
- Add keys to `.env`.
- Use Stripe API to create checkout sessions and handle webhooks for order confirmation.
- See Stripe docs for [Next.js integration](https://stripe.com/docs/stripe-js/react).

---

## 📝 Customization & Extending

- Add more product fields in `prisma/schema.prisma` and re-run migrations.
- Customize UI in `components/` and `app/`.
- Add more authentication providers via Clerk dashboard.
- Extend admin features as needed.
- Add more payment methods via Stripe dashboard.

---

## 🚀 Deployment

- Push your code to GitHub.
- Connect your repo to [Vercel](https://vercel.com).
- Set environment variables in Vercel dashboard (same as `.env`).
- Deploy!

---

## 🧠 Keywords

`nextjs`, `ecommerce`, `prisma`, `supabase`, `clerk`, `stripe`, `shadcn`, `tailwindcss`, `react`, `typescript`, `postgresql`, `app router`, `server actions`, `image upload`, `admin dashboard`, `dark mode`, `modern ui`

---

## 🤝 Credits

- [Next.js](https://nextjs.org/)
- [Prisma](https://prisma.io/)
- [Supabase](https://supabase.com/)
- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 👤 Author & Contact

**Arnob Mahmud**  
Email: [arnob_t78@yahoo.com](mailto:arnob_t78@yahoo.com)

---

## 📄 License

MIT

---

> _Happy coding! If you have any questions or want to contribute, feel free to open an issue or pull request._
