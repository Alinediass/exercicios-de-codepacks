function calcularIdade() {
    var nomeCompleto = prompt("Digite seu nome completo:");
    var anoNascimento = parseInt(prompt("Digite seu ano de nascimento (entre 1922 e 2021):"));
  
        while (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
      anoNascimento = parseInt(prompt("Ano de nascimento inválido. Digite novamente (entre 1922 e 2021):"));
    }
  
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
  
    console.log("Nome: " + nomeCompleto);
    console.log("Idade: " + idade);
  }
  

  calcularIdade();
  

  //Verificar o que é isNaN
  //Verificar o que é new date
  //Verificar o que é .getFullYear

  //Codigo de Isaias para eu analisar:

  function verificaAno(){
    while(true){
        const ano = parseInt(prompt("Digite o ano do seu nascimento: "))
        //isNaN verifica se o valor é NaN ou não. obs:NaN = Not at Number.
        if(!isNaN(ano) && ano >=1922 && ano <=2021){
            return ano
        }else {
            //exibe uma caixa de diálogo simples na tela.
            alert("Ano inválido. O ano deve estár 1922 e 2021.")
        }
    }
}
  

function verificaIdade(anonasc,anoatual){
    return anoatual-anonasc
}

function cadastraCliente(){
    const nome = prompt("Digite o seu nome completo: ")
    const anonasc = verificaAno()
    const anoatual = 2023
    const idade = verificaIdade(anonasc,anoatual)

    alert(`Seu nome completo é: ${nome}\nVocê tem ou terá ${idade} anos em ${anoatual}: .`)        
}

cadastraCliente();