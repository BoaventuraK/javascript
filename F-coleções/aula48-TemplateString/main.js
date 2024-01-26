//Template String, seria um jeito mais simples e menos trabalhoso de concatenar strings, ou seja se for usar variaveis que nao sejam do tipo string é nessesario convertelas a string
const cx=document.getElementById("cx")
const cx1=document.getElementById("cx1")
const cx2=document.getElementById("cx2")

const nome="Kauna"
const linguagem="JavaScript"

//Sem usar template String
const frase="Menu nome é: "+nome+" e eu estou estudanto: "+linguagem
cx.innerHTML=frase

//Usando template String
const frase1=`Meu nome é: ${nome} <br> e eu estou estudanto: ${linguagem}`

cx1.innerHTML=frase1

//Usando o template String com um array

const cor=["Rosa","Laranja","Lilas"]

let ul=`<ul>`
cor.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul+=`</ul>`

cx2.innerHTML=ul
