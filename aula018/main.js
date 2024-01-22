//Função paramentrizada
//Exemplo abaixo

function soma(n1=0,n2=0){ //As variaveis nos parenteses sao os paramentros
    return n1+n2
}

console.log(soma(4,5))

//Em js é possovel operar uma variavel dentro de uma funçao e alterar seu valor sem problemas
//Exemplo abaixo

function mudarValor(){
    let c=0
    c=a
    a=b
    b=c
}

let a=3
let b=9

mudarValor()

console.log("Novo valor de a:",a)
console.log("Novo valor de b:",b)
