# Inventory Management Tool

A RESTful API for managing inventory with user authentication, product management, and interactive API documentation. containerized using Docker and Docker Compose.

---

##  Features

- User registration and login with JWT authentication  
- Add, view, and update products  
- JWT-protected routes  
- Swagger UI for API documentation  
- Dockerized backend and database  
- Postman collection for testing  

---

##  Tech Stack

- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Authentication**: JWT  
- **Docs**: Swagger  
- **Deployment**: Docker, Docker Compose  

---

##  Setup Instructions

###  Option 1: Run with Docker (Recommended)

1. **Clone the repo:**
   ```bash
   git clone https://github.com/aryan12022/Inventory-Management-Tool-Backend-APIs-.git
   cd Inventory-Management-Tool-Backend-APIs-

Build and start the containers:

docker-compose up --build
Access your app:

API: http://localhost:3000

Swagger Docs: http://localhost:3000/api-docs

Option 2: Run Locally Without Docker
Install dependencies:

npm install
Create .env and set values:
PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Run the server:
node app.js

 Authentication
Use the JWT token in headers after login:


Authorization: Bearer <your_token>

API Endpoints
Auth
Method	Endpoint	Description
POST	/register	Register a user
POST	/login	Login a user

Products (JWT required)
Method	Endpoint	Description
GET	/products	List all products
POST	/products	Add a new product
PUT	/products/:id/quantity	Update product quantity

 Test Results (Python script)

User Registration: PASSED  
Login Test: PASSED  
Add Product: PASSED  
Update Quantity: PASSED, Updated quantity: 15  
Get Products: PASSED (Quantity = 15)

📁 Project Structure

├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env.example
├── app.js
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
├── swagger.json
├── Inventory_Management.postman_collection.json

Dockerfile

FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "node app.js"]

 .dockerignore

node_modules
npm-debug.log
.env