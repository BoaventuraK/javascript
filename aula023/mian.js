//Funções geradoras
//Tem seu retorno adiado ate o momento em que o retorno for nessesario
//Para transformar uma função em geradora basta por um * depois da palavra function
//Na primeira vez que for chamada vai retornar um iterador 
//Basicamente pode ser entendida como uma função com varios retornos, os yield
//Onde na primeira vez em que for chamda nao retorna nd, e as demais vezes retornas os valores dos yield um por um, no caso se ouverem 3 yield e a função for chamada so duas vezes, apos a primeira, retornara apenas os dois yield
//o mode de chamar a funçã é um pouco difrenete, vc tem que açociala a uma variavel, qeu vai ser a primeira chamada, depois colocar o pdrão variavel.next().value, para retornar o yield na ordem
//sempre que um yield é encontrado ele é retornado e a função para a execução

function* teste(){
    yield 'Verde'
    yield 'Azul'
    yield 'Rosa'
}

const itt=teste()
console.log(itt.next().value)
console.log(itt.next().value)
console.log(itt.next().value)

//Usando um return em uma função geradora 

function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const idade=yield 'Qual sua idade?'

    return 'Seu nome é: '+nome+' Vc tem: '+idade+' anos'
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Kauan').value)
console.log(itp.next('18').value)

//usando a função geradora com um loop infinito para ela contar um numero a mais sempre que chamada

function* cont(){
    let i=0
    while(true){
        yield ++i
    }
}

const itc=cont()
for(let i=0;i<10;i++){
    console.log(itc.next().value)
}
