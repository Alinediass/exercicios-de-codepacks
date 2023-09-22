let numero_correto, numero
numero_correto = false

while (numero_correto==false) {
    try {
        numero = parseInt(prompt("Digite um número par"))
        if (numero === false){
            if (numero % 2 === 0) {
                numero_correto=true
                console.log("Você digitou um numero par")
             
        } else {
            numero_correto=false
            console.log("Você digitou um numero impar")
        }

    }else {
        throw new error("Valor digitado não é um numero valido")
    }
} catch (error) {
        window.alert(error)
        window.alert(`Valor invalido, digite novamente`)
    }
}
