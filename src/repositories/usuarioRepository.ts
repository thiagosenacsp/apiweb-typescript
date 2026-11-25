// Camada responsável por conversar com o BD
import Usuario from "../models/usuario.js";

const usuarios: Usuario[] = [];
// usuarioS to tipo "array" ou "vetor" de usuários

async function getUsuario(id: number): Promise<Usuario | undefined> {
  return new Promise((resolve, reject) => {
    return resolve(usuarios.find((usuario) => usuario.id === id));
  });
}

async function getAllUsuarios(): Promise<Usuario[]> {
  return new Promise((resolve, reject) => {
    return resolve(usuarios);
  });
}
// resolve	Cumpre a promessa com valor.
// reject	Rejeita a promessa com um erro.

async function addUsuario(usuario: Usuario): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    if (!usuario.nome || !usuario.senha) {
      return reject(new Error("Dados de usuário inválidos"));
    }
    const novoUsuario = new Usuario(usuario.id, usuario.nome, usuario.senha);
    usuarios.push(novoUsuario);
    return resolve(novoUsuario);
  });
}

export default { getUsuario, getAllUsuarios, addUsuario };
