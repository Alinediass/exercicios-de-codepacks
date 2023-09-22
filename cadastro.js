class Pessoa {
    constructor(nome, salario, idade, possuiDiploma) {
      this.nome = nome; //String
      this.salario = salario; //Number
      this.idade = idade; //Number
      this.possuiDiploma = possuiDiploma; //Boolean
    }
  }
  
const pessoa1 = new Pessoa("Aline", 3000, 34, true);
  
  console.log("Nome: " + pessoa1.nome);
  console.log("Salário: " + pessoa1.salario);
  console.log("Idade: " + pessoa1.idade);
  console.log("Possui diploma: " + pessoa1.possuiDiploma);
  