import express from "express";

import bolsonController from "../controller/bolson.js";

const router = express.Router();

router.get("/", bolsonController.findAll);

export default router;
