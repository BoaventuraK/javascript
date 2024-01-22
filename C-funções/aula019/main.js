//Paramentro REST
//Uma explicação seria a possibilidade de criar uma função sem numero determinado de valores como parametro
//Para isso, basta passar um spread como parametro, oq muda um poudo a forma de operar
//Exemplo:

function soma(...val){
    let tam=val.length //pegando a quantidade de parametros passados
    let res=0 //Variavel que vai acumular os valores para dar o resultado

    for(let i=0;i<tam;i++){//For vai percorrer o vetor para pegar os valores 
        res+=val[i]
    }
 
    return res
}

console.log(soma(4,5,6))

//Essa função pode ser simplificada usando o for of, por exemplo

function soma1(...val){
    let res=0
    for(let v of val){
        res+=v
    }

    return res
}

console.log(soma1(2,3,4))
