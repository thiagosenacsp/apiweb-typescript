// Responsável por definir os endpoints da API e direcionar as requisições
import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", usuarioController.getAllUsuarios);

export default router;
