

# MERN Stack Image Upload Application

## Project Overview
This is a full-stack MERN (MongoDB, Express, React, Node.js) application where users can sign up, log in, and upload images with a title and description. The images are stored in **Cloudinary** and the data is managed in a **MongoDB** database. The backend is hosted on **Render**, and the frontend is deployed on **Netlify**.

The project demonstrates the core functionality of user authentication, image uploading, and fetching data using a REST API.

[Watch the Demo Video](https://youtu.be/dTMMCjncgPw)

---

## Features
- **User Authentication**: Users can sign up and log in using session management.
- **Image Upload**: Users can upload images with a title and description. The images are uploaded to **Cloudinary**.
- **Image Fetching**: Uploaded images are displayed on the frontend with their titles, descriptions, and view count.
- **State Management with Redux**: The application uses Redux to manage the state of the image data.
- **Responsive Design**: The frontend is built using React and styled for a responsive user experience.

---

## Tech Stack

**Frontend**:  
- React  
  
- CSS (Bootstrap/Tailwind for styling)  
- Netlify (Deployment)

**Backend**:  
- Node.js  
- Express.js  
- MongoDB (Database)  
- Cloudinary (Image storage)  
- Render (Backend hosting)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/image-upload-app.git
cd image-upload-app
```

### 2. Install Dependencies

For the backend, run:
```bash
npm install
```

For the frontend, navigate to the `client` directory and run:
```bash
cd backend
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following variables:

```bash
MONGO_URI=your-mongodb-uri
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
JWT_SECRET=your-jwt-secret
```

### 4. Running the Application Locally

To run the backend and frontend concurrently, use:

```bash
npm run dev
```

This will start both the backend server (on **Render**) and the frontend development server (on **Netlify**).

### 5. Deployment

- **Backend**: Deployed on **Render**. Ensure the environment variables are set on Render's dashboard.
- **Frontend**: Deployed on **Netlify**. The frontend connects to the backend hosted on Render.

---

## API Endpoints

### 1. User Authentication

- **POST /auth/signup**: Register a new user
- **POST /auth/login**: Log in an existing user

### 2. Image Upload

- **POST /api/upload**: Upload an image to **Cloudinary** along with a title and description

### 3. Fetch Images

- **GET /api/images**: Fetch all uploaded images, including their view counts


---



## Live Demo

The application is live and can be accessed via the following links:
- **Frontend**: [Netlify Live Link](https://sadfds.netlify.app)
- **Backend**: [Render Live Link](https://hubx-wapj.onrender.com)

---

## Demo Video

[Watch the Demo Video on YouTube](https://youtu.be/dTMMCjncgPw)

---

#
