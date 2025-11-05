import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/users/router.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors()); // <-- Habilita CORS para todas las rutas
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api", userRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
