# Next.js 13 + Drizzle ORM Todo App

A simple Todo app built with Next.js 13 (App Router), Drizzle ORM, and server actions.  
Supports creating, deleting, clearing todos, and marking completion status.

---

## Features

- Create todos with title and completion status
- List all todos with completion badges (Done / Pending)
- Delete individual todos
- Clear all todos at once
- Server actions for fast, secure backend operations
- Automatic cache revalidation for real-time UI updates
- Fully typed with TypeScript
- Tailwind CSS styling

---

## Technologies

- Next.js 13 (App Router)
- Drizzle ORM
- Neon (PostgreSQL serverless database)
- React Server & Client Components
- Server Actions (`"use server"` / `"use client"`)
- Tailwind CSS

---

## Getting Started

### Prerequisites

- Node.js 18+
- Neon PostgreSQL database (serverless)

### Setup Neon Database

1. Create a Neon account at [neon.tech](https://neon.tech) and create a new project.
2. Get the connection string (connection URI) from Neon dashboard.
3. In your project root, create a `.env` file and add:

   ```env
   DATABASE_URL="your-neon-connection-string"
