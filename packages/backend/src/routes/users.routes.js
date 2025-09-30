import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/users", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.json(rows);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(`SELECT * FROM users WHERE id = ${id}`);

  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(rows);
});

router.post("/users", (req, res) => {
  const data = req.body;
  res.json(data);
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  res.sendStatus(204);
});

router.put("/users/:id", (req, res) => {
  res.send("actualizando user");
});

export default router;
