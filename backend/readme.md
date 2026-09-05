# Financial Controller - Backend Service

This directory contains the Node.js TypeScript backend for the **Financial Controller** application.

---

## 📋 Summary of Work Done (From Folder Creation)

Here is a step-by-step breakdown of everything initialized and configured in this backend repository from scratch:

### 1. Workspace Initialization & Project Setup
- Created the root `Financial-Controller` project workspace containing dedicated `backend` and `frontend` subdirectories.
- Initialized Node.js environment inside `backend/` with `package.json`.
```bash
npm init -y
```
- Configured ES Module support by setting `"type": "module"` in `package.json`.

- Installed dependencies and their types to use with typescript.


### 2. Dependency Installation
Installed core production dependencies and TypeScript definitions:
- **Web Server & Middleware**:
  - `express` (`^5.2.1`) - Express v5 application framework.
  - `cors` (`^2.8.6`) & `@types/cors` (`^2.8.19`) - Enabling Cross-Origin Resource Sharing.
  - `dotenv` (`^17.4.2`) - Managing environment configuration variables.
- **Database & ORM Layer**:
  - `prisma` (`^8.0.0-rc.12`) & `@prisma/client` (`^7.10.0`) - Modern ORM and database client toolset.
  - `mongoose` (`^9.9.4`) - Object Data Modeling library for MongoDB.
- **TypeScript Support**:
  - `@types/express` (`^5.0.6`) - Type definitions for Express.

```bash

npm i express dotenv cors mongoose

npm install --save-dev typescript tsx @types/node @types/express @types/cors dotenv express mongoose prisma
```

### 3. Layered Directory Architecture
Organized application code under `src/` following a clean separation of concerns pattern:
```
backend/
├── src/
│   ├── config/       # Database connections & environment configuration
│   ├── controllers/  # Express route handlers & request logic
│   ├── models/       # Data schemas and database models
│   ├── routes/       # API router & endpoint definitions
│   ├── services/     # Core business logic services
│   ├── utils/        # Helper functions & shared utilities
│   └── server.ts     # Application entry point & server setup
├── .env              # Server environment variables
├── .env.local        # Local environment overrides
├── .gitignore        # Git ignore directives (node_modules, envs, logs)
├── package.json      # NPM dependencies and runner scripts
├── prisma.config.ts  # Prisma CLI & agent skills configuration
└── readme.md         # Project history & developer guide
```

### 4. Express Server Setup (`src/server.ts`)
- Created `src/server.ts` entry point script.
- Configured environment variables via `dotenv.config()`.
- Applied global middleware:
  - `express.json()` for parsing incoming JSON request bodies.
  - `cors()` for cross-origin access.
- Implemented root route handler (`GET /`) logging `"hello world"`.
- Set up HTTP server listener on process port (`process.env.PORT`).

```bash

import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("hello world");
});

app.listen(PORT, () => {
  console.log(`the server is running at port : ${PORT}`);
});
```

- Set up `dev` script to start the server with watch mode in package.json.
```bash
scripts = "node --watch src/server.js";
npm run dev
```

### 5. Environment & Git Settings
- Created `.env` setting `PORT = 5000`.
- Created `.env.local` for local environment configurations.
- Formulated `.gitignore` ignoring `node_modules/`, `.env*` files, build output (`dist/`, `build/`), logs, IDE artifacts, and database dumps.

### 6. Prisma ORM & Tooling Setup

- Installed prisma dependecies
```bash
npm install prisma @prisma/client
```

- Initialised prisma
```bash
npx prisma init
```

- Got `prisma.config.ts` with agent skills configuration (`claude`, `cursor`, `agents`, `devin`).

---

## 🛠 Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Language**: TypeScript
- **Framework**: Express v5
- **Databases / ORMs**: Prisma ORM, Mongoose (MongoDB)
- **Configuration**: Dotenv

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install
```

### Development Server
```bash
# Start server in watch mode
npm run dev
```

---

## 📜 Available NPM Scripts

- `npm run dev`: Runs the backend server with hot-reloading (`node --watch`).
- `npm run postinstall`: Triggers Prisma skills synchronization.
