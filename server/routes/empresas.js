import express from "express";
import empresasController from "../controller/empresas.js";

// Importar el controlador

const router = express.Router();

router.get("/", empresasController.findAll);

router.post("/", empresasController.create);

router.put("/:id", empresasController.editById);


export default router;