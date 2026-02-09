# 🎓 E-Learning Management System (LMS)

A full-featured **E-Learning Management System** built with **React**, **Node.js**, **Express**, and **MongoDB**.  
Supports **Students** and **Instructors**, allowing instructors to manage courses while students browse, purchase, and enroll in courses.  
Includes **Razorpay integration**, **JWT authentication**, **OTP verification**, **role-based access control**, and **secure password reset**.

---

# 🚀 Features

## 👤 Authentication & Authorization

- JWT-based authentication
- Role-based access control (Student / Instructor)
- OTP verification (Email/Phone)
- Secure login & signup
- Forgot password & reset password functionality

## 🎓 Student Features

- Register & login securely
- Browse available courses
- Purchase courses via Razorpay
- Enroll and access purchased courses
- View course content

## 🧑‍🏫 Instructor Features

- Instructor registration & login
- Create, update, and delete courses
- Manage enrolled students
- Upload course content

## 💳 Payment Integration

- Razorpay payment gateway
- Secure checkout flow
- Payment verification on backend
- Automatic course access after successful payment

## 🛡 Security

- Password hashing with bcrypt
- JWT token validation
- Protected API routes
- Environment-based configuration

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Axios
- Context API
- CSS / Styled Components

## Backend

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token)
- Razorpay API
- Nodemailer

---

# 📦 Installation

**Clone the repository**

```bash
git clone <repository-url>
cd <project-folder>
```
# Backend
- cd backend
- npm install
- node index.js

# Frontend
- cd frontend
- npm install
- npm run dev

# 🧪 Environment Variables
- PORT=5000
- DB=mongodb+srv://<DB_USER>:<DB_PASSWORD>@cluster0.mnhzdt7.mongodb.net/<DB_NAME>?retryWrites=true&w=majority
- RAZORPAY_KEY=<your_razorpay_key>
- RAZORPAY_SECRET=<your_razorpay_secret>
- GMAIL=<your_email>
- GMAIL_PASSWORD=<your_email_password>
- ACTIVATION_SECRET=<random_secret_for_email_activation>
- JWT_SECRET=<random_jwt_secret>
- FORGOT_SECRET=<random_secret_for_password_reset>
- FRONTEND_URL=http://localhost:5173