function buscaBinaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;
  
    while (inicio <= fim) {
      let meio = Math.floor((inicio + fim) / 2);
  
      if (array[meio] === valor) {
        return meio;
      } else if (array[meio] < valor) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
  
    return -1; // Retorna -1 se o valor não for encontrado
  }
  
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const valorBuscado = 20;
  
  const indice = buscaBinaria(array, valorBuscado);
  
  if (indice !== -1) {
    console.log(`O valor ${valorBuscado} foi encontrado no índice ${indice}.`);
  } else {
    console.log(`O valor ${valorBuscado} não foi encontrado no array.`);
  }
  