//Referenciando elementos do DOM

const parent=document.querySelector('#cx1')
const c1=document.querySelector('#c1')

console.log(parent.lastElementChild) //Pegando o primeiro elemento filho
console.log(parent.firstElementChild) //Pegando o ultimo elemento filho
console.log(parent.children) //Pegando todos os elementos filhos
console.log(document.getRootNode())//Pegando a raiz do documento
console.log(parent.ownerDocument)//Pegando o proprietario do documento
console.log(parent.hasChildNodes())//Função que retorna true se o elemento possuir um filho, filhos não nessesariamente são elementos 

console.log(c1.parentElement.parentElement)//Pegando o elemento avo de outro
