var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));

var operador = prompt("Digite o operador (+, -, *, /):");

var resultado;

switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "/":
    resultado = Math.floor(valor1 / valor2);
    var resto = valor1 % valor2;
    console.log("Resultado: " + resultado + ", Resto: " + resto);
    break;
  default:
    console.log("Operador inválido!");
}

if (operador !== "/") {
  console.log("Resultado: " + resultado);
}
