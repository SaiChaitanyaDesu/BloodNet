![BloodNet](https://github.com/user-attachments/assets/2ee21d18-8e81-4e74-b1b6-3e1e9221391d)

# BloodNet
Connecting donors, and blood banks to save lives.

A blood management platform for managing donors, recipients, blood banks, staff, blood specimens, blood availability, and blood requests.

## Overview

BloodNet is a web based platform designed to centralize and simplify blood management workflows.

The system provides dedicated workflows for different entities involved in blood management, including:

- Donors
- Recipients
- Blood Banks
- Staff

The application allows users to register and authenticate, manage their profiles, search for blood availability, record donations, manage blood specimens, and submit blood requests.

---

## Features

### Donor Management

- Donor registration and authentication
- Donor profile
- Donor transaction history

### 🏦 Blood Bank Management

- Blood bank registration and authentication
- Blood bank profile
- Blood bank directory
- Blood inventory

### 👤 Recipient Management

- Recipient registration and authentication
- Recipient profile
- Blood availability search
- Blood requests
- Recipient transaction information

### 👨‍💼 Staff Management

- Staff registration
- Staff authentication
- Blood bank association
- Authorized registration operations
  
### 🔎 Blood Availability

Users can search for available blood based on:

- Blood group
- Location
- Blood bank

The system retrieves available blood specimens and their associated blood bank information.

### 🔐 Authentication

- JWT based authentication
- HTTP only cookies
- Password hashing using bcrypt
- Role based access control

### ⚡ Redis Caching

Redis is used as a caching layer to reduce repeated database queries and improve application performance.

Frequently accessed information can be cached, including:

- Blood bank information
- Blood bank locations
- Donor information
- Donor transactions
- Blood counts


## Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| Next.js 15 | Frontend framework |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling |
| Axios | API communication |

### Backend

| Technology | Purpose |
|------------|---------|
| Express.js | REST API framework |
| TypeScript | Backend development |
| JWT | Authentication |
| bcryptjs | Password hashing |
| cookie-parser | Cookie handling |
| CORS | Cross-origin communication |

### Database & Caching

| Technology | Purpose |
|------------|---------|
| MySQL | Primary relational database |
| Redis | Caching layer |

---

## Architecture

BloodNet follows a client-server architecture.

```text
                         BLOODNET
                            │
             ┌──────────────┴──────────────┐
             │                             │
             ▼                             ▼
     ┌────────────────┐           ┌────────────────┐
     │    Frontend    │           │     Backend    │
     │    Next.js     │◄─────────►│   Express.js   │
     │                │ REST API  │                │
     └────────────────┘           └───────┬────────┘
                                          │
                           ┌──────────────┴──────────────┐
                           │                             │
                           ▼                             ▼
                    ┌──────────────┐             ┌──────────────┐
                    │    MySQL     │             │    Redis     │
                    │   Database   │             │    Cache     │
                    └──────────────┘             └──────────────┘
```
---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MySQL
- Redis

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Lavakumar1807/BloodNet.git
cd BloodNet
```

### 2. Configure MySQL

Create a MySQL database for the application.

The backend uses the following database environment variables:

```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_PORT=3306
```

### 3. Setup Redis

Make sure Redis is running locally.

The application expects Redis to be available at:

```text
127.0.0.1:6379
```

### 4. Setup the Backend

Move into the backend directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` directory:

```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_PORT=3306

JWT_SECRET=your_jwt_secret
REDIS_EXPIRE_TIME=3600
```

Start the development server:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

### 5. Setup the Frontend

Open another terminal and move into the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:3000
```

### 6. Open the Application

Open the application in your browser:

```text
http://localhost:3000
```

---

## Application Flow

```text
                          User
                           │
                           ▼
                  ┌─────────────────┐
                  │ Next.js Frontend│
                  │   localhost:3000│
                  └────────┬────────┘
                           │
                           │ REST API
                           ▼
                  ┌─────────────────┐
                  │ Express Backend │
                  │  localhost:5000 │
                  └────────┬────────┘
                           │
                           ▼
                   ┌───────────────┐
                   │     Redis     │
                   │     Cache     │
                   └───────┬───────┘
                           │
                           ▼
                   ┌───────────────┐
                   │     MySQL     │
                   │    Database   │
                   └───────────────┘           
```

---

## API Modules

| Module | Responsibility |
|--------|----------------|
| `bloodbank.ts` | Blood bank registration, authentication, directory, locations, and management |
| `donor.ts` | Donor registration, authentication, donations, details, and transactions |
| `recipient.ts` | Recipient registration, authentication, details, and blood requests |
| `staff.ts` | Staff registration and authentication |
| `bloodspecimen.ts` | Blood specimen and inventory management |

---

## Authentication Flow

BloodNet uses JWT based authentication with HTTP only cookies.

```text
User
 │
 ▼
Login
 │
 ▼
Express API
 │
 ├── Validate credentials
 │
 ├── Verify hashed password
 │
 └── Generate JWT
       │
       ▼
 HTTP only Cookie
       │
       ▼
Authenticated Request
```

Passwords are hashed using `bcryptjs`.

---

## Redis Caching

Redis is used as a caching layer between the backend and the MySQL database.

```text
Client Request
      │
      ▼
Express API
      │
      ▼
Redis Cache
   │       │
   │ Hit   │ Miss
   │       │
   ▼       ▼
Return    MySQL
Data       │
           ▼
      Store in Redis
           │
           ▼
        Response
```

Caching helps reduce repeated database queries for frequently accessed information.

---

## Frontend Sections

The frontend provides dedicated sections for:

- Authentication
- Explore
- Blood Availability
- Blood Bank Directory
- Blood Inventory
- Donation
- Blood Requests
- User Profiles

---

## Development Commands

### Frontend

Run commands from the `client` directory:

```bash
npm run dev
npm run build
npm run start
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run start` | Start the production application |

### Backend

Run commands from the `server` directory:

```bash
npm run dev
npm run build
npm start
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the backend development server |
| `npm run build` | Compile TypeScript |
| `npm start` | Start the compiled backend |

---

## Security

BloodNet includes several security mechanisms:

- JWT based authentication
- HTTP only authentication cookies
- Password hashing using bcrypt
- Credential verification
- CORS configuration

---

## Project Goals

The main goal of BloodNet is to simplify blood management by providing a centralized platform for:

```text
Donors
   │
   ▼
Blood Banks
   │
   ├── Blood Inventory
   │
   ▼
Recipients
   │
   └── Blood Requests
```

The platform aims to make blood donation, blood inventory management, blood availability tracking, and blood request workflows easier to manage through a single integrated system.

---
