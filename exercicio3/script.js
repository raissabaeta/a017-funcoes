let perguntaPrimeiroNumero = Number(prompt("Digite um número para fazer operações"))
let perguntaSegundoNumero = Number(prompt("Digite outro número para fazer operações"))

function fazSoma(num1,num2) {
    const soma = num1 + num2;
    console.log("Resultado da soma " + soma);
    return soma;
    
}

fazSoma(perguntaPrimeiroNumero, perguntaSegundoNumero)


function fazSubtracao(num1,num2) {
    const subtracao = num1 - num2;
    console.log("Resultado da subtração " + subtracao);
    return subtracao;
}

fazSubtracao(perguntaPrimeiroNumero, perguntaSegundoNumero)


function fazDivisao(num1,num2) {
    const divisao = num1 / num2;
    console.log("Resultado da divisão " + divisao)
    return divisao;
}

fazDivisao(perguntaPrimeiroNumero, perguntaSegundoNumero)

function fazMultiplicacao(num1,num2) {
    const multiplicacao = num1*num2;
    console.log("Resultado da multiplicação " + multiplicacao)
    return multiplicacao;
}

fazMultiplicacao(perguntaPrimeiroNumero, perguntaSegundoNumero)



 
















// const imprimeNumeros = (array) => {
//      const novoArray = []
//      novoArray.push(array[0], array[array.length-1])
//      return novoArray
//  }

// arrayTeste = [1,2,3,4,5]
//  console.log(imprimeNumeros(arrayTeste))


//  //Crie uma função que receba um array de números como parametro e retorne um novo array apenas com os números pares.

//  const numerosPares = (array) => {
//     let novoArrayPar = []

//     for(let i of array){
//         if(i % 2 === 0){
//             novoArrayPar.push(i)
//         }
//     }
//    return novoArrayPar
// }

// const arrayTeste2 = [1,5,6,23,8,9,2,56,4]

// console.log(numerosPares(arrayTeste2));