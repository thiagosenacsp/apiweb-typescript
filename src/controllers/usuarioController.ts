// Responsável por receber as requisições HTTP
import usuarioRepository from "../repositories/usuarioRepository.js";
import { Request, Response, NextFunction } from "express";

function getAllUsuarios(req: Request, res: Response, next: NextFunction) {
  const usuarios = usuarioRepository.getAllUsuarios();
  res.json(usuarios);
}

export default getAllUsuarios;
