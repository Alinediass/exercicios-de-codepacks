function inicio() {
    console.log("Seja bem vindo à calculadora.");
}
  
function soma(a, b) {
    return a + b;
}
  
const subtracao = (a, b) => a - b;
  

inicio(); 

const num1 = 8;
const num2 = 2;
  
const resultadoSoma = soma(num1, num2); 
console.log("Resultado da soma:", resultadoSoma);
  
const resultadoSubtracao = subtracao(num1, num2); 
console.log("Resultado da subtração:", resultadoSubtracao);
  
