import express from "express";
// Importar el controlador
import afiliadosController from "../controller/afiliados.js";

const router = express.Router();

// Definir las rutas y los controladores
router.get("/", afiliadosController.findAll);

router.post("/", afiliadosController.create);

router.put("/:id", afiliadosController.update);

router.delete("/delete", afiliadosController.delete);

export default router;
