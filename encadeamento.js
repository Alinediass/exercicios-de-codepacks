class Pessoa {
    constructor(nome, idade, filho) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
      this.proximo = null;
    }
  }
  
  class ListaEncadeada {
    constructor() {
      this.primeiro = null;
      this.ultimo = null;
    }
  
    adicionarPessoa(nome, idade, filho) {
      const novaPessoa = new Pessoa(nome, idade, filho);
  
      if (this.primeiro === null) {
        this.primeiro = novaPessoa;
        this.ultimo = novaPessoa;
      } else {
        this.ultimo.proximo = novaPessoa;
        this.ultimo = novaPessoa;
      }
    }
  
    exibirPessoas() {
      let atual = this.primeiro;
  
      while (atual !== null) {
        console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}, Filho: ${atual.filho}`);
        atual = atual.proximo;
      }
    }
  }
  
  const lista = new ListaEncadeada();
  
  lista.adicionarPessoa("João", 30, "Maria");
  lista.adicionarPessoa("Maria", 28, "Pedro");
  lista.adicionarPessoa("Pedro", 5, "Lucas");
  
  lista.exibirPessoas();
  