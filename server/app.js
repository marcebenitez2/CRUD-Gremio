import express from "express";
import cors from "cors";
import loginRoute from "./routes/login.js";

// Crear la aplicacion express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuracion de middlewares
app.use(cors());
app.use(express.json());

// Configuracion de rutas
app.use("/api/login", loginRoute);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
