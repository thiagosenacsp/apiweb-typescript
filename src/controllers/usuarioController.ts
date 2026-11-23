// Responsável por receber as requisições HTTP
import { Request, Response, NextFunction } from "express";
import usuarioRepository from "../repositories/usuarioRepository.js";

async function getUsuario(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id as unknown as number;
  const usuario = await usuarioRepository.getUsuario(id);
  if (usuario) res.json(usuario);
  else res.sendStatus(404);
}

async function getAllUsuarios(req: Request, res: Response, next: NextFunction) {
  const usuarios = await usuarioRepository.getAllUsuarios();
  res.json(usuarios);
}

export default { getAllUsuarios, getUsuario };
