let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;
let nulo = 0;

let finalizarVotacao = false;

while (!finalizarVotacao) {
  let voto = prompt("Digite o número do candidato (1 para candidato_X, 2 para candidato_Y, 3 para candidato_Z, 0 para branco):");

  if (isNaN(voto)) {
    alert("Por favor, digite um número válido para votar.");
    continue;
  }

  switch (parseInt(voto)) {
    case 1:
      candidato_X++;
      break;
    case 2:
      candidato_Y++;
      break;
    case 3:
      candidato_Z++;
      break;
    case 0:
      branco++;
      break;
    default:
      nulo++;
      break;
  }

  let finalizar = prompt("Deseja finalizar a votação? (S/N)").toUpperCase();
  if (finalizar === "S") {
    finalizarVotacao = true;
  }
}

let votos = [candidato_X, candidato_Y, candidato_Z];
let maxVotos = Math.max(...votos);
let vencedor = "";

if (maxVotos === candidato_X) {
  vencedor = "candidato_X";
} else if (maxVotos === candidato_Y) {
  vencedor = "candidato_Y";
} else if (maxVotos === candidato_Z) {
  vencedor = "candidato_Z";
}

console.log("Resultado da eleição:");
console.log("candidato_X: " + candidato_X + " votos");
console.log("candidato_Y: " + candidato_Y + " votos");
console.log("candidato_Z: " + candidato_Z + " votos");
console.log("Branco: " + branco + " votos");
console.log("Nulo: " + nulo + " votos");
console.log("Vencedor: " + vencedor);
