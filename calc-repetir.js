function calculadora() {
    while (true) {
      console.log("1: Soma");
      console.log("2: Subtração");
      console.log("3: Multiplicação");
      console.log("4: Divisão");
      console.log("0: Sair");
  
      let operacao = parseInt(prompt("Digite o número correspondente a operação que deseja executar:"));
  
      if (operacao === 0) {
        break;
      }
  
      let resultado;
      let primeiroValor = parseFloat(prompt("Digite o primeiro valor:"));
      let segundoValor = parseFloat(prompt("Digite o segundo valor:"));
  
      switch (operacao) {
        case 1:
          resultado = primeiroValor + segundoValor;
          console.log(`O resultado é: ${resultado}`);
          break;
        case 2:
          resultado = primeiroValor - segundoValor;
          console.log(`O resultado é: ${resultado}`);
          break;
        case 3:
          resultado = primeiroValor * segundoValor;
          console.log(`O resultado é: ${resultado}`);
          break;
        case 4:
          resultado = primeiroValor / segundoValor;
          console.log(`O resultado é: ${resultado}`);
          break;
        default:
          console.log("Essa opção não existe");
          break;
      }
    }
  }
  
  calculadora();
  