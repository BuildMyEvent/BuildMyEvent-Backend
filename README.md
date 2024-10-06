# BuildMyEvent

Welcome to **BuildMyEvent**! This is a digital ticketing platform where users can create events, manage tickets, and attend events using roles like `organizer` or `attendee`. The platform also integrates Metamask wallets for users.

## Features

- Event creation and management.
- Role-based access (`organizer`, `attendee`).
- Integration with Metamask for user wallets.
- Digital ticketing system.
- Secure authentication using JWT.

## Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Database Migrations](#database-migrations)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [API Documentation](#api-documentation)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/BuildMyEvent.git
cd BuildMyEvent
npm install
```


## Prerequisites

- Node.js (v16+)
- MySQL (or compatible database)
- Metamask (for users with wallets)



## Environment Setup

Create a .env file in the root of your project and configure it as needed:


```bash
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/buildmyevent
SECRET_JWT_TOKEN=your_jwt_secret
```

## Database Migrations

Create a .env file in the root of your project and configure it as needed:


1. Reset Migrations (optional): If you need to reset and start fresh:

```bash
npx prisma migrate reset
```

2. Run Migrations: To apply the migrations:

```bash
npx prisma migrate dev
```

3. Generate Prisma Client:

```bash
npx prisma generate
```

## Running the Project

1. Install dependencies

```bash
npm install
```

2. To start the project in development mode:

```bash
npm run dev
```


## Technologies Used

- Node.js: Backend runtime.
- Express: Web framework.
- Prisma: ORM for database handling.
- MySQL: Relational database.
- JWT: Secure token-based authentication.
- Metamask: Blockchain wallet integration.