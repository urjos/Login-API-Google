import { pool } from "../../db.js";

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

export const createUser = async (req, res) => {
  try {
    const { name, email, password, country } = req.body;

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password, country) VALUES (?, ?, ?, ?)",
      [name, email, password, country]
    );

    return res.json({
      id: result.insertId,
      name,
      email,
      password,
      country,
      created_at: new Date(),
      message: "User created successfully",
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
