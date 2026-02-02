# E-Learning Website

A modern **E-Learning platform** built using **MERN stack (MongoDB, Express, React, Node.js)**.  
Users can register, login, view courses, upload/download lectures, and watch videos online.

---

## **Project Features**
- User authentication with JWT (signup/login)
- Role-based access (Admin/Student)
- Course management (CRUD operations)
- Video/PDF upload and streaming
- Secure file storage with **Git LFS** for large files
- Responsive frontend using **React**
- API built with **Express & Node.js**
- Database: **MongoDB**

---

## **Folder Structure**

```text
E_learning-website/
│
├── backend/                   # Server-side code
│   ├── controllers/           # API logic
│   ├── middlewares/           # JWT auth, error handling
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   ├── uploads/               # Uploaded videos/files (ignored in Git)
│   ├── index.js               # Entry point for backend
│   └── .env                   # Environment variables
│
├── frontend/                  # Client-side code
│   ├── public/                # Static assets
│   ├── src/                   # React components
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Different pages (Home, Courses, Dashboard)
│   │   ├── context/           # React context or Redux for state
│   │   ├── App.js             # Main React component
│   │   └── index.js           # Entry point for React
│   ├── package.json
│   └── node_modules/          # Ignored in Git
│
├── .gitignore                 # Ignored files (node_modules, uploads)
├── README.md                  # Project documentation
└── package.json               # Project dependencies


Installation
Backend
cd backend
npm install
npm run start       # or nodemon index.js

Frontend
cd frontend
npm install
npm start           # Runs React dev server

Usage

Open frontend in browser: http://localhost:3000

Register as student or admin

Access courses, upload lectures (admin), download/stream lectures (student)

Enjoy learning online!

Technologies Used

Frontend: React, CSS, HTML

Backend: Node.js, Express

Database: MongoDB
