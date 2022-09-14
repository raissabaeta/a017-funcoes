function nome () {
     console.log(`Olá, Raissa`);
}

nome ()

// function tabuada () {
//     console.log(1*6,2*6,3*6,4*6,5*6,6*6,7*6,8*6,9*6,10*6);
//  }

// tabuada ()

// const nome = () => "Olá, Raissa"
// console.log(nome());


const tabuada = (numero) => {
    for(let i=1;i <11;i++){
        console.log(`${i} x ${numero} = ${Number(numero*i)}`)
    }
}
tabuada(6)