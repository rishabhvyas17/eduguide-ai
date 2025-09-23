# 🎓 EduGuide AI - Holistic Student Evaluation System

## Overview
EduGuide AI is an AI-powered holistic student evaluation and career guidance system for K-12 and high school students. It combines academic analysis, aptitude testing, and personal interviews to provide comprehensive career guidance.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- MongoDB 6.x
- Git

### Installation & Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd eduguide-ai
```

2. Install all dependencies:
```bash
npm run install-all
```

3. Set up environment variables:
```bash
# Backend (.env in server folder)
cp server/.env.example server/.env

# Frontend (.env in client folder)
cp client/.env.example client/.env
```

4. Start MongoDB (using Docker):
```bash
docker run -d -p 27017:27017 --name eduguide-mongo \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  mongo:latest
```

5. Start development servers:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend development server on http://localhost:3000

## 📁 Project Structure

```
eduguide-ai/
├── client/                 # React frontend (JavaScript)
├── server/                 # Node.js backend
├── README.md
```

## 🛠️ Tech Stack

### Frontend
- React 18.x with JavaScript
- Redux Toolkit for state management
- Material-UI for components
- Axios for API calls
- React Router for navigation

### Backend
- Node.js 18.x with Express.js
- MongoDB with Mongoose ODM
- JWT authentication
- bcryptjs for password hashing
- Express validation

## 📋 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run install-all` - Install dependencies for both frontend and backend
- `npm run build` - Build frontend for production

### Backend (server folder)
- `npm run dev` - Start backend in development mode with nodemon
- `npm start` - Start backend in production mode

### Frontend (client folder)
- `npm start` - Start frontend development server
- `npm run build` - Build frontend for production

## 🔧 Development

### Environment Variables

#### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/eduguide
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
```

#### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Database Setup
The application uses MongoDB. You can either:
1. Install MongoDB locally
2. Use MongoDB Atlas (cloud)
3. Use Docker

## 📊 API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user
- POST `/api/auth/logout` - Logout user

### Students
- GET `/api/students` - Get all students
- GET `/api/students/:id` - Get single student
- POST `/api/students` - Create new student
- PUT `/api/students/:id` - Update student
- DELETE `/api/students/:id` - Delete student

### Assessments
- GET `/api/assessments` - Get all assessments
- GET `/api/assessments/:id` - Get single assessment
- POST `/api/assessments` - Create new assessment
- PUT `/api/assessments/:id` - Update assessment

## 🔐 Default Login Credentials
After setting up the database, you can create an admin user through the registration endpoint or add one directly to MongoDB.

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License
This project is licensed under the MIT License.

## 🆘 Support
For support, contact the development team or create an issue in the repository.
