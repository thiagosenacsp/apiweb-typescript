// Responsável por receber as requisições HTTP
import { Request, Response, NextFunction } from "express";
import usuarioRepository from "../repositories/usuarioRepository.js";
import Usuario from "../models/usuario.js";

async function getUsuario(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id as string);
  const usuario = await usuarioRepository.getUsuario(id);
  if (usuario) res.json(usuario);
  else res.sendStatus(404);
}

async function getAllUsuarios(req: Request, res: Response, next: NextFunction) {
  const usuarios = await usuarioRepository.getAllUsuarios();
  res.json(usuarios);
}

async function postUsuario(req: Request, res: Response, next: NextFunction) {
  const usuario = req.body as Usuario;
  const resultado = await usuarioRepository.addUsuario(usuario);
  res.status(201).json(resultado);
}

export default { getAllUsuarios, getUsuario, postUsuario };
