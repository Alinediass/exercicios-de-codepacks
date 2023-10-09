let caneta = {
    cor: "azul",
    tamanho: "médio",
    tinta: 50,
    escrever: function(texto) {
      console.log("Escrevendo: " + texto);
    },
    trocarCor: function(novaCor) {
      this.cor = novaCor;
      console.log("Cor da caneta alterada para: " + novaCor);
    },
    recarregar: function() {
      this.tinta = 100;
      console.log("Caneta recarregada. Tinta atual: " + this.tinta);
    }
  };
  
  caneta.escrever("Olá, mundo!");
  caneta.trocarCor("vermelho");
  caneta.recarregar();
  
  let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    velocidade: 0,
    acelerar: function() {
      this.velocidade += 10;
      console.log("Velocidade atual: " + this.velocidade + " km/h");
    },
    frear: function() {
      this.velocidade -= 10;
      console.log("Velocidade atual: " + this.velocidade + " km/h");
    },
    ligar: function() {
      console.log("Carro ligado");
    }
  };
  
  carro.ligar();
  carro.acelerar();
  carro.frear();
  
 let contaBancaria = {
    numero: "123456",
    saldo: 1000,
    titular: "Aline",
    depositar: function(valor) {
      this.saldo += valor;
      console.log("Depósito realizado. Saldo atual: " + this.saldo);
    },
    sacar: function(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log("Saque realizado. Saldo atual: " + this.saldo);
      } else {
        console.log("Saldo insuficiente");
      }
    },
    consultarSaldo: function() {
      console.log("Saldo atual: " + this.saldo);
    }
  };
  
  contaBancaria.depositar(500);
  contaBancaria.sacar(200);
  contaBancaria.consultarSaldo();
  
  let agenda = {
    nome: "Agenda Pessoal",
    contatos: [],
    data: "09/10/2023",
    adicionarContato: function(contato) {
      this.contatos.push(contato);
      console.log("Contato adicionado à agenda");
    },
    removerContato: function(contato) {
      let index = this.contatos.indexOf(contato);
      if (index !== -1) {
        this.contatos.splice(index, 1);
        console.log("Contato removido da agenda");
      } else {
        console.log("Contato não encontrado na agenda");
      }
    },
    mostrarContatos: function() {
      console.log("Contatos na agenda:");
      this.contatos.forEach(function(contato) {
        console.log(contato.nome + " - " + contato.telefone);
      });
    }
  };
  
  let contato1 = {
    nome: "Fernando",
    telefone: "123456789"
  };
  
  agenda.adicionarContato(contato1);
  agenda.mostrarContatos();
  agenda.removerContato(contato1);
  agenda.mostrarContatos();
  
