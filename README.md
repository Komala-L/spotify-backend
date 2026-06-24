# 🎵 Spotify Backend API

A robust Spotify-inspired backend application built with Node.js, Express.js, and MongoDB. This project provides secure authentication, artist management, music management, and album management APIs following modern backend development practices.

## 📖 Overview

This project was built to gain hands-on experience with backend development, authentication, authorization, database relationships, middleware, and REST API design.

The application supports user registration, login/logout functionality, artist-specific actions, music uploads, album creation, and retrieval of music and album data.

---

## ✨ Features

### 🔐 Authentication & Authorization

- User Registration
- User Login
- User Logout
- JWT-based Authentication
- Cookie-based Session Handling
- Protected Routes using Middleware
- Role-Based Access Control (User / Artist)

### 🎤 Artist Features

- Artist Authorization
- Upload Music
- Create Albums

### 🎵 Music Management

- Upload Music
- Retrieve All Music
- Associate Music with Albums

### 💿 Album Management

- Create Album
- Retrieve All Albums
- Retrieve Album by ID

### 🛡️ Security Features

- Password Hashing using Bcrypt
- JWT Verification
- Protected API Endpoints
- Environment Variable Management with Dotenv

---

## 🏗️ Tech Stack

| Category | Technologies |
|-----------|-------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT |
| Password Security | Bcrypt.js |
| Cookies | Cookie Parser |
| Media Storage | ImageKit |
| Environment Variables | Dotenv |
| API Testing | Postman |

---

## 📂 Project Structure

```bash
spotify-backend/
│
├── src/
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── music.model.js
│   │   └── album.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   └── db/
│       └── db.js
│
├── app.js
├── server.js
├── postman/
│   └── spotify-backend-api.postman_collection.json
├── package.json
└── .env
```

---

## 🔄 Database Relationships

### User → Music

One Artist can upload multiple Music records.

```text
User (Artist)
      │
      ├── Music 1
      ├── Music 2
      └── Music 3
```

### Album → Music

One Album can contain multiple Music records.

```text
Album
   │
   ├── Music 1
   ├── Music 2
   └── Music 3
```

### Album → Artist

Each Album belongs to a specific Artist.

```text
Artist
   │
   └── Album
          │
          ├── Music 1
          └── Music 2
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Komala-L/spotify-backend.git
```

```bash
cd spotify-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Start Production Server

```bash
npm start
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |
| POST | `/auth/logout` | Logout user |

### Music

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/music/upload` | Upload music |
| GET | `/music/` | Get all music |

### Albums

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/music/album` | Create album |
| GET | `/music/albums` | Get all albums |
| GET | `/music/album/:albumId` | Get album by ID |

---

## API Testing

This project includes a Postman collection for testing all APIs.

Location : postman/spotify-backend-api.postman_collection.json

Import the collection into Postman to test the endpoints.

---

## 🧠 Key Concepts Learned

During this project, I gained practical experience with:

- REST API Development
- MVC Architecture
- MongoDB Data Modeling
- JWT Authentication
- Authorization Middleware
- Password Hashing
- Mongoose Populate
- One-to-Many Relationships
- API Security
- Backend Project Structuring
- Error Handling
- Environment Variable Management

---

## 👨‍💻 Author

### Komala L

BCA Student | Aspiring Full Stack Developer

---

## ⭐ Support

If you found this project helpful, consider giving it a star ⭐ on GitHub.
