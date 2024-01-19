//Operador spread.
//Tem a função de espalhar os elementos de um obj, um array, um htmlColection, etc.

//veja o exemplo a baixo, e analise as duas execuções:

function soma(n1,n2,n3){
    return n1+n2+n3
}

let v1=[2,4,5]

console.log("Sem o operador Spread:",soma(v1),"\n")

console.log("Com operador Spread:",soma(...v1))

//A segundo console.log() retorna a soma, pois os elementos do arry foram espalhados, posibilitando encachalos no lugar dos paramentro, ja na primeiro console.log() isso não acontece.