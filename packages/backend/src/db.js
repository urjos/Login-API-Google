// src/db.js
import mysql from "mysql2/promise";
import config from "./config.js";

// Crear un pool de conexiones
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mi_base",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Probar conexión al arrancar
try {
  const connection = await pool.getConnection();
  console.log("✅ Conectado a MySQL");
  connection.release();
} catch (err) {
  console.error("❌ Error conectando a MySQL:", err);
}

export default pool;
