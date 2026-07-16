# User Management REST API using Express.js

## 📌 Project Overview

This project is a simple **REST API** built using **Node.js** and **Express.js** following the **MVC (Model-Controller-Routes)** architecture. It performs basic **CRUD (Create, Read, Update, Delete)** operations on an in-memory user dataset without using a database.

This project is ideal for beginners who want to understand how Express applications are structured before integrating databases like MongoDB.

---

## 🚀 Technologies Used

* Node.js
* Express.js
* JavaScript (ES Modules)

---

## 📂 Project Structure

```text
project/
│
├── server.js
│
├── routes/
│   └── userRoutes.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── package.json
└── README.md
```

---

## 📁 Folder Description

### server.js

The entry point of the application.

Responsibilities:

* Creates the Express application.
* Registers middleware.
* Loads API routes.
* Starts the server on port **3000**.

---

### routes/

Contains all API endpoints.

Example routes:

* GET
* POST
* PUT
* DELETE

The route file receives HTTP requests and forwards them to the appropriate controller.

---

### controllers/

Contains the business logic of the application.

Responsibilities:

* Receive client requests.
* Read request parameters and request body.
* Call model functions.
* Return JSON responses.

---

### models/

Contains the application data and data manipulation logic.

Responsibilities:

* Store user data.
* Retrieve users.
* Add new users.
* Update existing users.
* Delete users.

In this project, data is stored in an in-memory JavaScript array instead of a database.

---

## 📊 Initial User Data

```javascript
[
  { id: 1, name: "aravinth", age: 20, city: "ludhiana" },
  { id: 2, name: "vijay", age: 19, city: "India" },
  { id: 3, name: "chithra", age: 43, city: "namakkal" },
  { id: 4, name: "raja", age: 16, city: "nkl" },
  { id: 5, name: "mownika", age: 18, city: "namakkal" },
  { id: 6, name: "Tamil", age: 47, city: "ludhiana" }
]
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project

```bash
cd project-folder
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node server.js
```

Server Output

```text
Server running at http://localhost:3000
```

---

## 📌 API Endpoints

### 1. Get All Users

**GET**

```text
/e
```

Response

```json
[
  {
    "id": 1,
    "name": "aravinth",
    "age": 20,
    "city": "ludhiana"
  }
]
```

---

### 2. Get User By ID

**GET**

```text
/:id
```

Example

```text
/2
```

Response

```json
{
  "data": {
    "id": 2,
    "name": "vijay",
    "age": 19,
    "city": "India"
  }
}
```

If the user does not exist:

```json
{
  "message": "User not found"
}
```

---

### 3. Create User

**POST**

```text
/users
```

Request Body

```json
{
  "name": "John",
  "age": 22,
  "city": "Chennai"
}
```

Response

```json
{
  "message": "User added successfully",
  "user": {
    "id": 7,
    "name": "John",
    "age": 22,
    "city": "Chennai"
  }
}
```

---

### 4. Update User

**PUT**

```text
/users/:id
```

Example

```text
/users/2
```

Request Body

```json
{
  "name": "Vijay Kumar",
  "age": 20,
  "city": "Coimbatore"
}
```

Response

```json
{
  "message": "User updated successfully",
  "data": {
    "id": 2,
    "name": "Vijay Kumar",
    "age": 20,
    "city": "Coimbatore"
  }
}
```

---

### 5. Delete User

**DELETE**

```text
/users/:id
```

Example

```text
/users/3
```

Response

```json
{
  "message": "Successfully deleted",
  "data": [
    {
      "id": 1,
      "name": "aravinth",
      "age": 20,
      "city": "ludhiana"
    }
  ]
}
```

---

## 🔄 Request Flow

```text
Client (Browser/Postman)
            │
            ▼
        server.js
            │
            ▼
     Routes (userRoutes)
            │
            ▼
Controllers (userController)
            │
            ▼
     Models (userModel)
            │
            ▼
      In-Memory Data
            │
            ▼
Controllers
            │
            ▼
Client Response (JSON)
```

---

## 📚 Features

* Express.js REST API
* MVC Architecture
* CRUD Operations
* JSON Responses
* Route Parameters
* Request Body Handling
* ES Module Syntax
* In-memory Data Storage

---

## 🔮 Future Improvements

* Integrate MongoDB using Mongoose
* Add Input Validation
* Implement Authentication and Authorization
* Improve Error Handling
* Add Logging
* Create API Documentation using Swagger
* Deploy the API using Render or Railway

---

## 📖 Learning Outcomes

Through this project, you will learn:

* Express.js fundamentals
* REST API development
* MVC architecture
* Route handling
* Controllers
* Models
* CRUD operations
* Request and response handling
* JSON data processing
* Express middleware
