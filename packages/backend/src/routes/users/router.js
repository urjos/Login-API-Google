import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  loginUser,
  googleLogin,
} from "../../controllers/users/controllers.js";

const router = Router();

router.get("/users", getUsers);

router.post("/auth/login", loginUser);

router.post("/auth/google/login", googleLogin);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

export default router;
