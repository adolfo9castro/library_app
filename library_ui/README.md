
# Books Management Frontend

This is the frontend of the **Books Management** application, built with Angular and Angular Material. The application allows performing CRUD operations (Create, Read, Update, Delete) for books.

---

## **Data Schema**

The application uses the following schema to manage books:

```json
{
  "id": "uuid",
  "title": "string",
  "author": "string",
  "read": "boolean"
}
```

### **Sample Data**
```json
[
  { "id": "uuid", "title": "On the Road", "author": "Jack Kerouac", "read": true },
  { "id": "uuid", "title": "Harry Potter and the Philosopher's Stone", "author": "J. K. Rowling", "read": false }
]
```

---

## **Features**

- List books.
- Add new books.
- Edit existing books.
- Delete books.
- Visual indicator for read/unread books.

---

## **Prerequisites**

Before deploying the project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **Angular CLI** (version 15 or higher)
- A compatible backend server (e.g., Flask).

---

## **Initial Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/adolfo9castro/library_frontend.git
   cd library_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```


---

## **Local Deployment**

1. **Run the application**
   ```bash
   ng serve
   ```

2. **Open in the browser**
   The application will be available at [http://localhost:4200](http://localhost:4200).

---

## **Production**

1. **Build the project**
   ```bash
   ng build --configuration production
   ```

2. **Serve the static files**
   Upload the generated files in the `dist` folder to a web server like Nginx, Apache, or an AWS S3 bucket.

---


## **Key Dependencies**

- **Angular**: Core framework for the application.
- **Angular Material**: Styled UI components.
- **RxJS**: Handles observables for HTTP requests.

---
