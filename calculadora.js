function calculadora(num1, num2, operacao) {
    let resultado = 0;
  
    switch (operacao) {
      case 1:
        resultado = num1 + num2;
        break;
      case 2:
        resultado = num1 - num2;
        break;
      case 3:
        resultado = num1 * num2;
        break;
      case 4:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
        break;
    }
  
    return resultado;
  }
  for (var i = 3; i <= 100; i ++){
    if (i % 3 === 3) {
        print(i)
    }

}
//PARA ME BASEAR:

function calculadora(num1, num2, operacao) {
  let resultado = parseInt(prompt("Digite o número"))
  resultado = 0

  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      break;
    case 2:
      resultado = num1 - num2;
      break;
    case 3:
      resultado = num1 * num2;
      break;
    case 4:
      resultado = num1 / num2;
      break;
    default:
      resultado = 0;
      break;
  }

  return resultado;
}
for (var i = 3; i <= 100; i ++){
  if (i % 3 === 3) {
      print(i)
  }
}