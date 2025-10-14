import bcrypt from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { pool } from "../../db.js";
config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const createAuthResponse = (user, token, message) => {
  return {
    message,
    id: user.id,
    name: user.name,
    email: user.email,
    country: user.country,
    picture: user.picture,
    auth_provider: user.auth_provider,
    token,
  };
};

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

    if (rows.length === 0) {
      return res.status(401).json({ message: "El email no está registrado" });
    }
    const user = rows[0];

    if (user.auth_provider === "google") {
      return res.status(409).json({
        message:
          "Este email está registrado con Google. Por favor, inicia sesión con Google.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const payload = { id: user.id, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json(createAuthResponse(user, token, "Login exitoso"));
  } catch (error) {
    console.error("Error en loginUser:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email, sub: googleId, locale, picture } = ticket.getPayload();

    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    let user = rows[0];

    if (!user) {
      const [result] = await pool.query(
        "INSERT INTO users (name, email, google_id, country, auth_provider, picture) VALUES (?, ?, ?, ?, ?, ?)",
        [
          name,
          email,
          googleId,
          locale ? locale.toUpperCase().split("-")[0] : null,
          "google",
          picture,
        ]
      );
      const [newUserRows] = await pool.query(
        "SELECT * FROM users WHERE id = ?",
        [result.insertId]
      );
      user = newUserRows[0];
    } else {
      if (user.auth_provider === "local") {
        return res.status(409).json({
          message:
            "Este email ya está registrado con una contraseña. Por favor, inicia sesión de forma tradicional.",
        });
      }
      if (user.picture !== picture) {
        await pool.query("UPDATE users SET picture = ? WHERE id = ?", [
          picture,
          user.id,
        ]);
        user.picture = picture;
      }
    }
    const appTokenPayload = { id: user.id, name: user.name };
    const appToken = jwt.sign(appTokenPayload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json(createAuthResponse(user, appToken, "Login con Google exitoso"));
  } catch (error) {
    console.error("Error en Google Login:", error);
    return res
      .status(401)
      .json({ message: "Autenticación con Google fallida" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, country } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password, country, auth_provider) VALUES (?, ?, ?, ?, 'local')",
      [name, email, hashedPassword, country]
    );
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
    console.error("Error en createUser:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "User not found" });
  } else {
    return res.status(204).json({ message: "User deleted successfully" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    const [result] = await pool.query("UPDATE users SET ? WHERE id = ?", [
      data,
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const [rows] = await pool.query(
      "SELECT id, name, email, country, picture, auth_provider FROM users WHERE id = ?",
      [id]
    );
    return res.json(rows[0]);
  } catch (error) {
    console.error("Error en updateUser:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
