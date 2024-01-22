//Função dentro de função
//basicamente seria criar uma função e chamar ela dentro de uma outa função

const somar=(...valores)=>{
    const soma=val=>{
        let res=0
        for(let v of val){
            res+=v
        }
        return res
    }

    return soma(valores)
}

console.log(somar(4,5,9))

//O exemplo acima tem o mesmo funcionamento do abaixo, porem com as funções agrupadas

const s=num=>{
    let res=0
    for(let n of num){
        res+=n
    }
    return res
}

const som=(...numeros)=>{
    return s(numeros)
}

console.log(som(2,3))
