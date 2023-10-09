try {
    const numero1 = Number(prompt("Digite o primeiro número:"));
    const numero2 = Number(prompt("Digite o segundo número:"));
  
    const resultado = numero1 / numero2;
  
    if (isNaN(resultado)) {
      throw new Error("Resultado inválido");
    }
  
    console.log("O resultado da divisão é:", resultado);
  } catch (error) {
    console.error("Ocorreu um erro:", error.message);
  } finally {
    console.log("Fim da execução");
  }
  
