# Financial Controller - Backend Service

This directory contains the Node.js TypeScript backend for the **Financial Controller** application.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+ or v20+ LTS recommended)
- **PostgreSQL** (v14+ running locally or remotely on port 5432)
- **npm** (bundled with Node.js)

### 1. Installation
Navigate to the backend folder and install the project dependencies:
```bash
cd backend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the `backend/` root directory (or copy from `.env.example` if available):
```env
PORT = 5000
DATABASE_URL="postgresql://postgres:<password>@localhost:5432/financial_controller"
```

### 3. Database Initialization & Contract Emission
Ensure your PostgreSQL server is active and the `financial_controller` database exists. Then compile the Prisma Schema Contract into runtime definitions and TypeScript types:
```bash
npm run contract:emit
```
> **What this does**: Reads `src/prisma/contract.prisma` and emits `src/prisma/contract.json` and `src/prisma/contract.d.ts`, powering the typed database client in `src/prisma/db.ts`.

### 4. Run Development Server
Start the Express server in watch mode (auto-restarts on code changes):
```bash
npm run dev
```

The server will be running at `http://localhost:5000` (or the port defined in your `.env`).

---

## 📜 Available NPM Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `node --watch src/server.js` | Launches the server with native Node.js watch mode for live reloading during development. |
| `npm run contract:emit` | `prisma contract emit` | Compiles the PSL schema contract into `contract.json` and TypeScript typings `contract.d.ts`. |
| `npm run postinstall` | `prisma skills sync \|\| exit 0` | Automatically synchronizes Prisma agent skills upon package installation. |

---

## 🗄️ Database & Domain Models Overview

The database is managed through Prisma's contract-driven PostgreSQL ORM (`src/prisma/contract.prisma`), featuring:
- **`User`**: Base user identity, email, and language preferences.
- **`EntrepreneurProfile`**: Geographic information (village, block, district, state) and GPS coordinates.
- **`BusinessProposal`**: Loan applications, business categorization, and margin equity.
- **`FeasibilityReport`**: Automated SWOT analysis, competitor mapping, and AI feasibility scores.
- **`FinancialPlan`**: Project costs, maximum loan eligibility, interest rates, moratorium periods, and monthly EMIs.
- **`RepaymentSchedule`**: Amortization installments, payment due dates, principal, and interest allocations.

### Querying the Database
All database operations use the centralized, strongly-typed client exported from `src/prisma/db.ts`:
```typescript
import { db } from './prisma/db.js';

// Example: Fetching user profiles with their business proposals
const users = await db.user.findMany({
  include: {
    entrepreneur: {
      include: { proposals: true }
    }
  }
});
```

For detailed architectural breakdown, setup history, and comprehensive explanations of each module, refer to the internal documentation in `system_structure.md`.
