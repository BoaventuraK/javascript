//Criando novos elementos e adicionando no DOM
//os codigos abaixo sao de como add uma lista de elementos

const cx=document.getElementById('cx1')
const cursos=["HTML","CSS","JavaScript","PHP","MySQL","React","ReactNative"]

cursos.map((e,i)=>{
   let keyId=i+1
    const newEl=document.createElement('div')
    newEl.setAttribute('id', 'c'+keyId)
    newEl.setAttribute('class', 'cursos')
    newEl.innerHTML=e
    cx.appendChild(newEl)
})

//os codigos comentados abaixo sao de como add um unico elemento

// const newEl=document.createElement('div')//Criando um novo elemento html pelo js
// newEl.setAttribute('class','cursos')//Adiciona um atributo ao novo elemento, o primeiro parametro é o atributo e o segundo seu valor
// newEl.setAttribute('id','c7')

// newEl.innerHTML='ReactNative'//add um texto ao novo elemento

// cx.appendChild(newEl)//anexando o novo elemento a um elemento pai
