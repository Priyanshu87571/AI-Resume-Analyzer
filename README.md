# AI Resume Analyzer

> An AI-powered Resume Analyzer that evaluates resumes against job descriptions, calculates ATS compatibility, identifies skill gaps, provides personalized improvement suggestions, and generates interview questions using Google Gemini AI.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react">
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js">
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb">
  <img src="https://img.shields.io/badge/Google-Gemini_AI-orange">
  <img src="https://img.shields.io/badge/License-MIT-blue">
</p>

---

## Overview

AI Resume Analyzer is a full-stack web application that helps job seekers optimize their resumes using Artificial Intelligence.

Users can upload their resume, provide a target job description, and receive an AI-generated report including:

- ✅ ATS Compatibility Score
- ✅ Resume Match Percentage
- ✅ Missing Skills
- ✅ Resume Strengths
- ✅ Resume Weaknesses
- ✅ AI Suggestions
- ✅ Technical Interview Questions
- ✅ Behavioral Interview Questions
- ✅ HR Interview Questions

The application uses **Google Gemini AI** to generate personalized resume analysis and interview preparation strategies.

---

## Features

### Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Logout Functionality

---

### Resume Analysis

- Upload Resume (PDF)
- Extract Resume Content
- Parse Resume Information
- AI Resume Evaluation
- ATS Score Calculation
- Resume Match Score
- Missing Keywords Detection
- Skill Gap Analysis

---

### Job Matching

- Job Description Input
- Resume vs Job Description Comparison
- AI Match Analysis
- Candidate Strengths
- Candidate Weaknesses
- Hiring Recommendation

---

### AI Interview Preparation

Generate AI-powered interview questions including:

- Technical Questions
- Behavioral Questions
- HR Questions
- Communication Assessment
- Confidence Tips

---

### Dashboard

- Previous Reports
- Interview Reports
- Resume Analysis History
- Report Details
- Responsive UI

---

## Tech Stack

## Frontend

- React.js
- React Router
- SCSS
- Axios
- Context API
- Vite

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- PDF Parser

---

## AI

- Google Gemini API

---

## Project Structure

```
AI-Resume-Analyzer/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   └── App.jsx
│
├── Backend/
│   ├── src/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.js
│
├── README.md
└── .gitignore
```

---

## Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AI-Resume-Analyzer.git
```

```
cd AI-Resume-Analyzer
```

---

## Backend Setup

```
cd Backend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

GOOGLE_GENAI_API_KEY=YOUR_API_KEY
```

Start backend

```bash
npm run dev or node server.js
```

---

## Frontend Setup

```
cd Frontend
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

---

# 📸 Screenshots

## Home Page

<img width="1012" height="827" alt="image" src="https://github.com/user-attachments/assets/e16ec48d-202d-4be4-99aa-3ea8d4713fad" />

---

## Login Page

<img width="1693" height="787" alt="Screenshot 2026-07-20 154138" src="https://github.com/user-attachments/assets/a72babee-01c2-4f68-b965-f7c3ed20781b" />


---

## Dashboard

<img width="1002" height="832" alt="image" src="https://github.com/user-attachments/assets/846df711-bd87-4a81-827d-15d982a5a2f5" />

---


# 🔄 Application Workflow

```
User Registration
        │
        ▼
User Login
        │
        ▼
Upload Resume
        │
        ▼
Enter Job Description
        │
        ▼
Resume Parsing
        │
        ▼
Google Gemini AI
        │
        ▼
Resume Analysis
        │
        ▼
ATS Score
        │
        ▼
Skill Gap Detection
        │
        ▼
Interview Question Generation
        │
        ▼
Final Report
```

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
JWT Token Generated
      │
      ▼
Cookie Stored
      │
      ▼
Protected Routes
      │
      ▼
Authenticated User
```

---

# 📦 API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|----------------|----------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/logout` | Logout User |
| GET | `/api/auth/get-me` | Current User |

---

## Interview

| Method | Endpoint | Description |
|----------|----------------|----------------|
| POST | `/api/interview` | Generate Report |
| GET | `/api/interview` | Get All Reports |
| GET | `/api/interview/report/:id` | Get Single Report |

---

# 💡 Future Improvements

- Resume Templates
- AI Cover Letter Generator
- LinkedIn Profile Analyzer
- Job Recommendation Engine
- AI Mock Interview
- Voice Interview Practice
- Resume Version History
- PDF Report Export
- Email Report Sharing
- Dark Mode

---

# 🌟 Why This Project?

This project demonstrates:

- Full Stack Development
- REST API Design
- Authentication & Authorization
- AI Integration
- File Upload Handling
- MongoDB Database Management
- Responsive UI Development
- Modern React Architecture
- Secure Backend Development

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```
git checkout -b feature-name
```

3. Commit changes

```
git commit -m "Added new feature"
```

4. Push changes

```
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Priyanshu Raj**

📧 Email: priyanshu875717@gmail.com

💼 LinkedIn: https://www.linkedin.com/in/priyanshu-raj-162763306/

🐙 GitHub: https://github.com/Priyanshu87571

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub!

It helps others discover the project and motivates further development.

---

<p align="center">
Made with ❤️ using React, Node.js, MongoDB & Google Gemini AI
</p>
