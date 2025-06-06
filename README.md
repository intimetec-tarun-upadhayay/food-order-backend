# 🍽️ Food Order Backend API

This is a backend service for managing food orders, built using **Node.js**, **Express**, **MySQL**, and **Swagger** for API documentation. The API supports creating customer orders along with order items in a relational structure.

---

## 📁 Project Structure

.
├── controllers/
├── models/
├── routes/
├── validators/
├── swagger.yml
├── app.js
├── swagger.js
├── package.json

yaml
Copy
Edit

---

## 🧑‍💻 Technologies Used

- Node.js
- Express
- MySQL2
- Joi (Validation)
- Swagger (API Docs)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/intimetec-tarun-upadhayay/food-order-backend.git
cd food-order-backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup MySQL Database
Create the database and tables:

sql
Copy
Edit
CREATE DATABASE orders_db;
USE orders_db;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  order_date DATE NOT NULL,
  total DECIMAL(10, 2) NOT NULL
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);
Update MySQL credentials in models/db.js if needed.

▶️ Run the App
Using Node:
bash
Copy
Edit
node app.js
Using Nodemon (recommended for development):
bash
Copy
Edit
npm run dev
Server will start on:

arduino
Copy
Edit
http://localhost:3000
📘 Swagger API Docs
View interactive API docs at:
bash
Copy
Edit
http://localhost:3000/api-docs
OR if using the YAML file directly:

Make sure swagger.js loads swagger.yml using yamljs

Replace the contents of swagger.js with:

js
Copy
Edit
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

module.exports = swaggerDocument;
📬 API Endpoint (example)
POST /api/orders
json
Copy
Edit
{
  "customer_id": 1,
  "order_date": "2025-06-01",
  "total": 299.99,
  "items": [
    {
      "product_id": 101,
      "quantity": 2,
      "price": 99.99
    },
    {
      "product_id": 102,
      "quantity": 1,
      "price": 100.01
    }
  ]
}
📄 License
MIT

👨‍💻 Author
Tarun Upadhayay
GitHub Profile

yaml
Copy
Edit

---

Let me know if you'd like badges (e.g., for version, license) or auto-deploy instructions (e.g., using Render or Railway).
