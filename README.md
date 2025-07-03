 Food Recipe Website

A full-stack web application that allows users to browse, search, add, and manage food recipes. The project is split into a Client (backend) and a topping (frontend) for better scalability and maintainability.

---
 Project Structure

 
---
Features

Topping (Frontend)
- Recipe listing with images and descriptions
- Recipe detail view
- Add/edit/delete your own recipes
- Search and filter recipes
- User registration and login
- Responsive design (Mobile-friendly)

 Client (Backend)
- RESTful API endpoints
- User authentication
- CRUD operations for recipes
- MongoDB database integration
- Input validation and error handling

---
 Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | React, Axios, Tailwind |
| Backend    | Node.js, Express.js    |
| Database   | MongoDB (Mongoose)     |
| Auth       |     Bcrypt            |

---
Setup Instructions
-Clone the Repository

Install Server Dependencies
cd client
npm install
server.js----
PORT=5000
MONGO_URI=your_mongodb_connection_string

run--
node server.js

Install Client Dependencies
cd ../topping
npm install

run--
npm start


