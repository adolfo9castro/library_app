
# Library App

## Overview

**Library App** is a web-based application for managing books, including adding, updating, and deleting book records. The project is built using Angular for the frontend, Flask for the backend API, and PostgreSQL as the database. It also includes a Swagger interface for API documentation.

---

## Features

- Manage books with CRUD operations.
- API documentation with Swagger.
- Responsive frontend with Angular Material design.
- Backend powered by Flask and PostgreSQL for reliable data management.

---

## Prerequisites

Make sure you have the following installed on your system:
- Docker
- Docker Compose

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/adolfo9castro/library_app.git
cd library-app
```

### 2. Configure Environment Variables
Create a `.env` file in the `library_api` folder with the following content:

```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=books

FLASK_ENV=development
ORIGINS=http://localhost
```

---

## Running the Project

### 1. Start Docker Compose
Run the following command in the root directory:
```bash
docker-compose up --build
```

This command will:
1. Start the PostgreSQL database.
2. Start the Flask API.
3. Serve the Angular frontend via Nginx.

### 2. Access the Application
- **Frontend (Library App)**: [http://localhost](http://localhost)
- **API Documentation (Swagger)**: [http://localhost:5000/swagger](http://localhost:5000/swagger)

---

## .env Configuration

Below is the `.env` configuration required for the project:

### `/` `.env` file:
```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=books

```

---

## Contact Information

- **Email**: [castro09@gmail.com](mailto:castro09@gmail.com)
- **LinkedIn**: [Adolfo Castro](https://www.linkedin.com/in/adolfo-castro/)
- **GitHub**: [adolfo9castro](https://github.com/adolfo9castro)

Feel free to reach out for any questions or feedback!

---