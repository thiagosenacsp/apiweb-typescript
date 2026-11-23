// Camada responsável por representar as entidades e
// estruturas de dados utilizadas na aplicação
export default class Usuario {
  id: number;
  nome: string;
  senha: string;

  private static nextId: number = 1;

  constructor(id: number, nome: string, senha: string) {
    this.id = Usuario.nextId++;
    this.nome = nome;
    this.senha = senha;
  }
}
