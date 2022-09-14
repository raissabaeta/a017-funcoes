function soma (num1,num2) {
     const fazSoma = num1+num2
     console.log(fazSoma);
}

 soma (2,2)

function verificaNumero (num1, num2) {
     const numeroMaior = num1 > num2
    console.log(numeroMaior);
}

verificaNumero (4,8)

function verificaPar (num1) {
    const numeroParOuImpar = num1 % 2;
    if(numeroParOuImpar === 0){
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

verificaPar (5)

function recebeString (mensagem) {
    const imprimeMensagem = mensagem.length
    const imprimeMaisculo = mensagem.toUpperCase()
        console.log(imprimeMensagem);
        console.log(imprimeMaisculo)
}

recebeString("Olá")


