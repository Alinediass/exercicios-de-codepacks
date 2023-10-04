const Banco = {
    conta: "05839",
    saldo: 1320,
    tipoConta: "corrente",
    agencia: "0001",
    
    buscarSaldo: function() {
      return this.saldo;
    },
    
    deposito: function(valor) {
      this.saldo += valor;
    },
    
    saque: function(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else {
        console.log("Saldo insuficiente.");
      }
    },
    
    numeroConta: function() {
      return this.conta;
    }
  };
  
  console.log("Saldo atual:", Banco.buscarSaldo());
  Banco.deposito(500);
  console.log("Saldo atual após depósito:", Banco.buscarSaldo());
  Banco.saque(200);
  console.log("Saldo atual após saque:", Banco.buscarSaldo());
  console.log("Número da conta:", Banco.numeroConta());
  
