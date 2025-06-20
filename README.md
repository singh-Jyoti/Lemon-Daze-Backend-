# 📦 Lemon-Daze Backend

An Express.js and MongoDB-based backend API for the **Lemon-Daze** e-commerce application.

---

## 📚 Tech Stack  

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **CORS**
- **dotenv**
- **JWT (optional, if added later)**
- **Railway / Render / Vercel (for deployment)**

---

## 📂 Project Structure


---

## 🚀 API Endpoints  

### 🔐 Auth Routes  

| Method | Endpoint        | Description               |
|:--------|:----------------|:---------------------------|
| `POST` | `/auth/register` | Register a new user         |
| `POST` | `/auth/login`    | Login existing user         |

---

### 🛒 Product Routes  

| Method | Endpoint   | Description               |
|:--------|:------------|:---------------------------|
| `POST` | `/Product`   | Add a new product |
| `GET`  | `/Product`   | Get all products           |

---

### 🛍️ Cart Routes  

| Method | Endpoint               | Description                   |
|:--------|:--------------------------|:---------------------------------|
| `POST` | `/Cart`                    | Add a product to a user's cart |
| `GET`  | `/Cart/:userId`            | Get all products in user's cart |
| `DELETE` | `/Cart/:userId/:productId` | Remove a product from the user's cart |

---

## 📝 How to Run Locally  

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/lemon-daze-backend.git
cd lemon-daze-backend
npm install

Create a .env file at the root:
PORT=8000
MONGO_URL=your_mongo_db_connection_string
