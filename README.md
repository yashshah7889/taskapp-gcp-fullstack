# 🚀 TaskApp - Full Stack Cloud Application

A full-stack task management application built using **React, Spring Boot, and Google Cloud**.

---

## 🌐 Architecture

React (Frontend)  
↓  
Cloud Run (Spring Boot Backend)  
↓  
Cloud SQL (PostgreSQL)

---

## ⚙️ Tech Stack

- Frontend: React (Vite)
- Backend: Spring Boot (Java)
- Database: PostgreSQL (Cloud SQL)
- Containerization: Docker
- Cloud: Google Cloud Run
- Registry: Artifact Registry

---

## ✨ Features

- Create tasks  
- View tasks  
- Update tasks  
- Delete tasks  

---

## 🚀 Deployment Steps (Simplified)

### 1. Build Backend
  -mvn clean package

### 2. Dockerize
  -docker build -t taskapp-backend .
  
### 3. Push to Artifact Registry
  -docker tag taskapp-backend us-central1-docker.pkg.dev/<PROJECT_ID>/taskapp-repo/taskapp-backend:latest
  -docker push us-central1-docker.pkg.dev/<PROJECT_ID>/taskapp-repo/taskapp-backend:latest
  
### 4. Deploy to Cloud Run
  -gcloud run deploy taskapp-backend
  --image us-central1-docker.pkg.dev/<PROJECT_ID>/taskapp-repo/taskapp-backend:latest
  --region us-central1
  --platform managed
  --allow-unauthenticated

  
---

## 🔗 Live API

https://taskapp-backend-45643909102.us-central1.run.app/api/tasks

---

## 💡 Key Learnings

- Deploying containerized applications on Cloud Run  
- Connecting Cloud Run with Cloud SQL  
- Debugging real-world deployment issues (DB connectivity, env configs)  
- Using environment variables for secure configuration  

---

## 🚧 Upcoming Improvements

- API Gateway using Apigee  
- Infrastructure as Code (Terraform)  
- Frontend deployment  

---

## 👨‍💻 Author

Yash Shah
## 🚀 Deployment Steps (Simplified)

### 1. Build Backend
