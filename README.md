#  Inventory Management App

A RESTful API for managing inventory with user authentication, product management, and interactive API documentation. Built with **Node.js**, **Express**, and **MongoDB**.

---

##  Features

-  User registration and login with JWT authentication
-  Add, view, and update products
-  Protected routes with JWT-based access control
-  Swagger UI for API documentation
-  Postman collection included for easy testing

---

##  Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Docs**: Swagger (OpenAPI 3.0)
- **Testing**: Postman

---

##  Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/inventory-management-app.git
cd inventory-management-app
2. Install dependencies

npm install

3. Environment Variables
Create a .env file based on the provided .env.example file:

cp .env.example .env

Fill in your actual values:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run the server

node app.js
Server will start at http://localhost:3000

 Authentication
After registration and login, use the returned JWT token in the Authorization header as:


Authorization: Bearer <your_token>
 API Documentation
Swagger UI
Interactive docs available at:

http://localhost:3000/api-docs
Swagger file: swagger.json

Postman Testing
Import the file Inventory_Management.postman_collection.json into Postman.

It includes all the endpoints pre-configured with sample data.

API Endpoints Overview
 
Method	Endpoint	Description

POST	/register	Register new user
POST	/login	    Login and receive JWT

Products (JWT required)

Method	Endpoint	            Description
GET	   /products	            Get all products
POST	/products	            Add a new product
PUT	   /products/:id/quantity	Update product quantity

 Project Structure

├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env.example
├── app.js
├── package.json
├── swagger.json
├── Inventory_Management.postman_collection.json

python script result 

User Registration: PASSED
Login Test: PASSED
Add Product: PASSED
Update Quantity: PASSED, Updated quantity: 15
Get Products: PASSED (Quantity = 15)


