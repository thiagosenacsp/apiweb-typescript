// Responsável por definir os endpoints da API e direcionar as requisições
import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/:id", usuarioController.getUsuario); // mais específico
router.get("/", usuarioController.getAllUsuarios); // mais genérico
// a ordem começa pela rota mais específica seguida da mais genérica,
// pois o express avalia as rotas na ordem.
router.post("/", usuarioController.postUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

export default router;
