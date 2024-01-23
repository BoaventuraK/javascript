//Metodo FILTER em js
//esse metodo, como diz o nome, faz uma filtragem em uma lista, que pode ser um array, por exemplo, onde ele pega o array inicial e gera um novo baseado nos filtros passados

//Um exeplo do uso do metodo filter

const idades=[30, 20, 17, 28, 14, 12]
const maior_de_idade=idades.filter((v)=>{ //por padrão o filter passa o valor, o indice e o array, nao sendo obrigatorio usar todos os parametros
    if(v >= 18){
        return v
    }
})

console.log(idades)
console.log(maior_de_idade)
