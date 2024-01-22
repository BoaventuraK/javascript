//getElementByTagName: pega todos os elementos da tag usada como parametro, obtendo uma coleção de elementos html, para que possam ser manipulados com o js 
//Normalmente trasformase essa coleção em um array, ja que os array possuem mais funções 
//exemplo:

const colecaoHTML=[...document.getElementsByTagName('div')]//trasformando a coleção em um array diretamente, possibilitando que o array permaneça uma const
//let array=[...colecaoHTML]: dessa forma o array teria que ser um let que poderia ser mudado //Transformando a coleção em um array

colecaoHTML.map((e)=>{
    e.innerHTML='Texto novoooo'
})
