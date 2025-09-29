import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.send("en users");
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("en user " + id);
});

router.post("/users", (req, res) => {
  res.send("creando un usuario");
});

router.delete("/users/:id", (req, res) => {
  res.send("eliminando user");
});

router.put("/users/:id", (req, res) => {
  res.send("actualizando user");
});

export default router;
