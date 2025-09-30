## GameCove API

A TypeScript backend for an indie-game marketplace: games catalog, event tracking, and a first-cut recommendation engine (content-based + popularity). Built to practice production-grade backend skills: transactional data access, indexing & query design, event tracking pipelines, a hybrid recommendation engine, HTTP API design with Fastify, Dockerized local DB, and room to add auth, Stripe webhooks, tests, and CI

## Features

Fastify HTTP API with CORS

Prisma + PostgreSQL schema & migrations

Seed script with demo games

Event tracking: VIEW, WISHLIST, PURCHASE

Recommendations: /games/:slug/recommendations (hybrid scorer)

Minimal, readable code you can extend (auth, payments, dashboards)

Tech Stack

Node.js + TypeScript

Fastify web framework

Prisma ORM

PostgreSQL (Docker)

Tooling: ts-node, Prisma Studio

## Author
Roshan Dayananda – [LinkedIn](https://www.linkedin.com/in/roshan-dayananda/) – [GitHub](https://github.com/RoshanD15)

## Project Setup (for Developers)

```bash
# Clone the repository
git clone https://github.com/RoshanD15/weavd.git
cd weavd

# Install dependencies
npm install

# Start the development server
npm run dev