export default class Usuario {
  id: number;
  nome: string;
  cpf: string;

  private static nextId: number = 1;

  constructor(id: number, nome: string, cpf: string) {
    this.id = Usuario.nextId++;
    this.nome = nome;
    this.cpf = cpf;
  }
}
