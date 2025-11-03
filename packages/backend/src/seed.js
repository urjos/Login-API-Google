import fs from "fs/promises";
import mysql from "mysql2/promise";
import path from "path";
import { fileURLToPath } from "url";

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runSeed() {
  let connection;
  try {
    console.log("Connecting to MySQL server...");
    connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
      multipleStatements: true,
    });

    console.log("Connected successfully.");

    console.log(`Creating database '${DB_NAME}' if it doesn't exist...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    await connection.query(`USE \`${DB_NAME}\`;`);
    console.log(`Database '${DB_NAME}' is ready.`);

    console.log("Reading db.sql file...");
    const sqlFilePath = path.join(__dirname, "database", "db.sql");
    const sqlScript = await fs.readFile(sqlFilePath, "utf-8");

    console.log("Running SQL script (DROP, CREATE, USE, CREATE TABLE)...");
    await connection.query(sqlScript);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    if (connection) {
      await connection.end();
      console.log("Connection closed.");
    }
  }
}

runSeed();
