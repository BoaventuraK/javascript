//loop while e do while, loops onde não se sabe a qunatidade de iterações

//while, é um loop com condição no inicio, ou seja, primeiro a condição é testada e depois, caso a condição seja verdadeira, ele executa o bloco, por exemplo:

let fat=5
let temp=1

while(fat>0){
    temp=temp*fat
    fat--
}

console.log(temp)


//do while, é um loop com condição no final, ou seja, primeiro ele executa o bloco, depois ele verifica a condição, case seja verdadeira ele continua executando ate que seja falso, caso seja falso ele executa aquela unica vez antes da verificação, exemplo abaixo:

let op=0, t=0

do{
    console.log("A condição é verdadeira, porem esse bloco ainda sera execurtado")
}while(op=0)
