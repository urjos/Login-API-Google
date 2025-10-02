import { pool } from "../../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const getUsers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  if (rows.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.json(rows);
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(rows[0]);
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    console.log(rows);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const user = rows[0];

    // 2. Comparar la contraseña enviada con el hash de la BD
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // 3. Crear y firmar un JWT
    const payload = { id: user.id, name: user.name };
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || "fallback_secret",
      {
        expiresIn: "1h",
      }
    );

    res.json({
      message: "Login exitoso",
      id: user.id,
      name: user.name,
      email: user.email,
      country: user.country,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, country } = req.body;

    // Hashear la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password, country) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, country]
    );

    // No devolver la contraseña en la respuesta
    return res.status(201).json({
      id: result.insertId,
      name,
      email,
      country,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "El email ya está registrado." });
    }
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

  if (result[0].affectedRows === 0) {
    return res.status(404).json({ message: "User not found" });
  } else {
    return res.sendStatus(204).json({ message: "User deleted successfully" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const result = await pool.query("UPDATE users SET ? WHERE id = ?", [
    data,
    id,
  ]);

  if (result[0].affectedRows === 0) {
    return res.status(404).json({ message: "Not updated" });
  } else {
    return res.sendStatus(204).json({ message: "User updated successfully" });
  }
};
