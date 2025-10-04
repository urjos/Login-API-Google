CREATE DATABASE IF NOT EXISTS nodesql
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE nodeSQL;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* Ejemplos de INSERT 
INSERT INTO users (name, email, password, country)
VALUES
  ('Juan Pérez', 'juan.perez@example.com', '1234abcd', 'Perú'),
  ('María Gómez', 'maria.gomez@example.com', 'abcd1234', 'México'),
  ('Carlos Fernández', 'carlos.fernandez@example.com', 'pass5678', 'Argentina');
*/