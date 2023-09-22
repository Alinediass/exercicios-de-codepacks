//Esse foi o exemplo que usei no exercicio do portal, relacionado a bomba:

console.log("Iniciando contagem regressiva");

for (let segundos = 10; segundos >= 0; segundos--) {
  console.log(segundos + " segundos");
  
}

console.log("BUM!");


//Exemplo de Isaias

function contregressiva(){
    let seg = parseInt(prompt("Digite o tempo desejado até a explosão: "))
    console.log("Bomb has been planted, iniciando contagem regressiva");

    for (let i= seg; i>= 0; i--){
        if (i> 0){
            console.log(i + "segundos restantes")}
            else {
            console.log("BUUUMMMMM, Terrorist Win!");
        }
    }
}    
    const tempexplosao = 50;
    
    contregressiva(tempexplosao);

//Meu exemplo da bomba para análise:

function bomba(){
    let seg = parseInt(prompt("Digite o tempo que deseja para ativar a bomba"))
    console.log("Contagem regressiva")

    for(let i =seg; i>= 0; i--){
        if (i> 0){
            console.log(i + "segundos") 
        }
                    
        else {
            console.log("Bum!!")
        }
    
    }   
}

const tempoexplosao = 20;
bomba(tempoexplosao);

//Agora faça a contagem regressiva com o tempo que o usuário quiser do reveillon:

function reveillon() {
    let tempo = parseInt(prompt("Digite o tempo regressivo para a chegada do ano novo"))
    console.log("Contagem Regressiva")

    for(let i= tempo; i>= 0; i--){
        if (i> 0) {
            console.log(i + " Segundos")
            
        }
        else{
            console.log("FELIZ ANO NOVO")
        }

    }
   
}

const segundosreveillon = 50;
reveillon(segundosreveillon);

//Agora faça o tempo em minutos das 17h até chegar o horário da largada do trabalho as 18h:

function largada() {
    let per = parseInt(prompt("Digite o tempo que desejar"))
    console.log("Início da contagem progressiva")

    for(let i = per; i <= 60; i++){
         if(i > 0){
            console.log(i + "minutos")
        }

        else{
         console.log("Bom descanso")
        }
    }
}

const minutoslargada = 20;
largada(minutoslargada);