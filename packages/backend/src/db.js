import mysql from "mysql2/promise"; // 1. Cambiar la importación

// 2. y 3. Crear el pool de conexiones con la sintaxis de mysql2
export const pool = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "",
  database: "nodesql",
  port: "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Prueba de conexión a la DB
/* pool.query("SELECT * FROM users").then((result) => {
  console.log(result);
}); */
