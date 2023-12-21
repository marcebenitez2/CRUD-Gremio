import express from "express";
// Importar el controlador
import loginController from "../controller/login.js";

const router = express.Router();

// Definir las rutas y los controladores

router.post("/login", loginController.login);

export default router;
