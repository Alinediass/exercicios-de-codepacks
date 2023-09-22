function calculadora(num1, num2, operacao) {

  switch (operacao) {
    case 1: 
      return num1 + num2;

    case 2: 
      return num1 - num2;

    case 3: 
      return num1 * num2;

    case 4: 
      return num1 / num2;

    default: 
      return 0;
  }
}

function executarCalculadora() {
    let num1 = parseFloat(prompt('Digite o primeiro número:'));
    let num2 = parseFloat(prompt('Digite o segundo número:'));
    let operacao = parseInt(prompt('Escolha a operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão'));

    let resultado = calculadora(num1, num2, operacao);
    console.log(`O resultado da operação é: ${resultado}`);
}

  executarCalculadora();


  //Para meu exemplo: Faça uma calculadora apenas de multiplicar e dividir.
  //Para chamar o operador utiliza-se por exemplo:  \n1
  //Tem fazer outra função e chamar let para cada paramentro da primeira função, se colocar no prompt
  //Para executar a operação basta chamar o nome da função e deixar o paramentro sem nada ()

  function calculadora(num1, num2, operacao) {

    switch (operacao) {
      case 1:
        return num1 * num2

      case 2:
        return num1 / num2
            
      default:
        return 0;
    }
    
  }

  function executar() {
    let num1 = parseFloat(prompt("Digite o primeiro numero"))
    let num2 = parseFloat(prompt("Digite o primeiro numero"))
    let operacao = parseFloat(prompt("Escolha a operação:\n1. Multipicação\n2. divisão"))

    let resultado = calculadora(num1, num2, operacao)
    console.log(`O resultado é ${resultado}`)
  }
  executar()