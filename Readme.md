# 🛍️ Fashiq — Your Personal Fashion Closet

Discover, shop, and organize your dream wardrobe right from your phone! 👗👟👜  
Start using Fashiq today and make fashion simple, fun, and effortless ✨

---

## Table of contents
- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Repository structure](#repository-structure)
  - [Mobile](#mobile)
  - [Backend](#backend)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run (development)](#run-development)
- [Environment](#environment)
- [Notes & recommendations](#notes--recommendations)
- [Contributing](#contributing)
- [License & contact](#license--contact)

---

## About
Fashiq is a mobile-first wardrobe manager and shopping companion. Browse, save, categorize, and outfit-plan — all from your phone. Fashiq combines an intuitive Expo-based mobile app with a powerful NestJS backend API.

## Features
- Browse and save items from shops
- Organize items into categories & outfits
- Search and filter wardrobe items
- Sync between mobile and backend
- User authentication & profile management
- (Extendable) Recommendations and outfit suggestions

## Tech stack
- Mobile: Expo (React Native) — Expo SDK 54
- Backend: NestJS (Node.js)
- Suggested DB: PostgreSQL / SQLite (configurable)
- Optional: TypeORM, JWT for auth

---

## Repository structure

Root (example)
- mobile/ — Expo mobile application (React Native)
- backend/ — NestJS API server
- README.md — this file
- .gitignore

### mobile
Mobile application built with Expo SDK 54.

Typical layout:
- mobile/
  - app.json / app.config.js
  - package.json
  - assets/
  - src/
    - components/        # Reusable UI components
    - screens/           # Screen components (Home, Closet, Item, Profile, ...)
    - navigation/        # React Navigation stacks/tabs
    - services/          # API clients, storage helpers
    - hooks/             # Custom hooks
    - contexts/          # React context providers
    - utils/             # Utility functions
    - styles/            # Theme and styling
  - .env (or .env.local) # local config for API base URL, keys (use env vars)

Notes:
- Uses Expo SDK 54 — ensure your local Expo CLI version is compatible.
- Typical commands: `npm install`, `npx expo start` or `npm start`.

### backend
Server application built with NestJS.

Typical layout:
- backend/
  - package.json
  - tsconfig.json
  - src/
    - main.ts            # Application bootstrap
    - app.module.ts
    - modules/           # Feature modules (auth, users, items, outfits, ...)
      - auth/
      - users/
      - items/
    - controllers/       # HTTP controllers
    - services/          # Business logic / providers
    - entities/ / models/# DB entities or models
    - common/            # Pipes, guards, interceptors, filters
    - config/            # Configuration and env loaders
  - .env.example         # Example environment variables
  - migration/ or prisma/
  - README or docs

Notes:
- Built with NestJS (TypeScript). Use `npm run start:dev` for local development.

---

## Getting started

### Prerequisites
- Node.js (recommended: Node 16 or newer)
- npm (or yarn)
- Expo CLI (for the mobile app): `npm install -g expo-cli` (or use `npx expo`)
- Database (if required): PostgreSQL / SQLite / other (configure via env)

### Install
Open two terminals (one for mobile, one for backend), then run the following:

Mobile
```bash
cd mobile
npm install
# Run the app (use npx if you don't have expo-cli globally)
npx expo start
# or
npm start
```

Backend
```bash
cd backend
npm install
# Start in development mode (watch + restart)
npm run start:dev
# or production
npm run start
```

(As requested)
- cd mobile npm install
- cd backend npm install

### Run (development)
- Mobile: Run Expo, open on simulator or Expo Go on device.
- Backend: Start NestJS dev server and point mobile app's API base URL to backend (e.g., http://localhost:3000 or tunnel URL).

---

## Environment
Create environment files from the provided examples:

- backend/.env.example -> backend/.env
- mobile/.env.example -> mobile/.env

Common variables:
- BACKEND_URL=http://localhost:3000
- DATABASE_URL=postgresql://user:pass@host:port/dbname
- JWT_SECRET=your_jwt_secret
- NODE_ENV=development

Make sure mobile app's API base URL matches your backend server (use local network IP or Expo tunnel when testing on physical devices).

---

## Notes & recommendations
- Expo SDK 54: ensure your global Expo CLI and native tooling are compatible with SDK 54. If you upgrade Expo, follow Expo upgrade guide.
- NestJS: use Node 16+ for best compatibility. If using TypeORM/Prisma, add migration workflow.
- Secure secrets: never commit .env files with real secrets. Use .env.example to show required keys.

---

## Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Install dependencies in both `mobile/` and `backend/` as needed
4. Run and test your changes
5. Open a PR with a clear description of changes

Please follow code style and add tests for backend logic where applicable.

---

## License & contact
Specify your license here (e.g., MIT).  
If you want help turning this into a complete CONTRIBUTING.md, CI setup, or example env files, open an issue or PR.

---

Enjoy building Fashiq! If you'd like, I can:
- generate .env.example files for both mobile and backend,
- scaffold npm scripts (start/dev) if missing,
- or create a CONTRIBUTING.md and GitHub Actions CI workflow next.