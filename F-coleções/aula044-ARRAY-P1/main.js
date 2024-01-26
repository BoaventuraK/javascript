//Array em Js
//No js um array pode aramazenar mais de um tipo de dado, ou seja no mesmo array pode-se ter string, number, boolean e inclusive é possivel armazenar um outro array dentro do array, oq geraria uma matriz.
//No js não pe preciso passar um tamanho maximo pro array, em termos simpres, ele tem o tamanho que precisa ter.

const cx=document.getElementById('cx')
const arr=["HTML","CSS","JS"]

arr.push("PHP")//A função push serve para adicionar um nome elemento no final do array
arr.pop()//Retira o ultimo elemento do array
arr.push("React")
arr.unshift("Java")//Adiciona um elemento no inicio do array
arr.shift()//Retira o primeiro elemento do array
arr.unshift("Flutter")

let cor=["Rosa","Lilas","Laranja", ["claro","medio","escuro"]]
arr.push(cor)

console.log(arr[5][3][0])

arr.map((e)=>{ //Percorrendo todo o array e criando um paragrafo para armazernar cada um dos seus elementos

    let p=document.createElement('p')
    p.setAttribute('id','pa')
    p.innerHTML=e

    cx.append(p)

})
