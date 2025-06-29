# Contacts API

A RESTful API for managing user contacts with authentication, refresh token support, Google OAuth 2.0 integration, and image upload capabilities. Built using Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/NodeJS-%235FA04E?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%233FA037?logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/Docs-Swagger-blue)
![License](https://img.shields.io/badge/license-ISC-blue)

---

## 🚀 Features

- User registration and login (including Google OAuth)
- JWT authentication (access/refresh)
- CRUD operations for contacts
- Image upload with Cloudinary
- Password reset via email
- API documentation with Swagger UI and Redoc

---

## 📦 Installation

```bash
git clone https://github.com/Serhii-Briushyn/contacts-api.git
cd contacts-api
npm install
```

### 🛠️ Environment Variables

Create a `.env` file based on [.env.example](./.env.example) and define the following variables:

- MongoDB: `MONGODB_USER`, `MONGODB_PASSWORD`, `MONGODB_URL`, `MONGODB_DB`
- SMTP: `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`
- JWT: `JWT_SECRET`
- Cloudinary: `CLOUD_NAME`, `API_KEY`, `API_SECRET`, `ENABLE_CLOUDINARY`
- Google OAuth: `GOOGLE_AUTH_CLIENT_ID`, `GOOGLE_AUTH_CLIENT_SECRET`, `GOOGLE_OAUTH_REDIRECT_URL`

---

## 📍 Running the Project

```bash
# Development mode
npm run dev

# Production mode
npm start
```

---

## 📘 API Documentation

### Swagger UI

- [Localhost](http://localhost:3000/api-docs)
- [Production](https://nodejs-hw-mongodb-n160.onrender.com/api-docs/)

### Redoc (if enabled)

```bash
npm run preview-docs
```

---

## 📂 Project Structure

```plaintext
├── docs/                 # HTML and YAML documentation files
│   ├── openapi.yaml      # Swagger specification
│   └── swagger.json      # Compiled documentation
├── public/               # Public assets
├── src/                  # Main application source
│   ├── constants/        # Constants (e.g. messages, roles)
│   ├── controllers/      # Route controllers
│   ├── db/               # Database initialization
│   ├── middlewares/      # Custom middleware
│   ├── routers/          # Route definitions
│   ├── services/         # Business logic
│   ├── templates/        # Email templates
│   ├── utils/            # Helper utilities
│   ├── validation/       # Validation schemas (e.g. Joi)
│   ├── index.js          # Entry point
│   └── server.js         # Server setup
├── swagger/              # Swagger components and paths
│   ├── components/
│   └── paths/
├── temp/                 # Temporary files
├── uploads/              # Uploaded images
├── .env                  # Local environment variables
├── .env.example          # Environment variables template
├── .gitignore
├── README.md
├── package.json
├── redocly.yaml          # Redoc configuration
```

---

## 🛠️ Available Commands

| Script                 | Description                 |
| ---------------------- | --------------------------- |
| `npm run dev`          | Run in development mode     |
| `npm start`            | Run in production           |
| `npm run build`        | Build Swagger documentation |
| `npm run preview-docs` | Preview Redoc documentation |

---

## 🧰 Technologies

- **Node.js**, **Express**
- **MongoDB**, **Mongoose**
- **JWT**, **OAuth2**
- **Multer**, **Cloudinary**
- **Nodemailer**, **Handlebars**
- **Swagger**, **Redoc**
- **ESLint**, **Prettier**

---

## 📬 Contact

**Author:** [Serhii Briushyn](mailto:briushyn.developer@gmail.com)

---

## 📝 License

This project is licensed under the ISC license.
