//getElementByid() função que pega o elemento html atravez do id e armazenalo em uma variavel para que ele possa ser manipulado com js
//exemplo:

const c1=document.getElementById("c1") //se passa o id do elemento como parametro da função
console.log(c1) // imprime o elemento inteiro
console.log(c1.id) //imprime o id do elemento
console.log(c1.innerHTML) //imprime o conteudo do elemento

//innerHTML é o texto que tem no elemento, que pode ser mudado apenas dizedno que o elemento.innerHTML recebe o texto qeu vc deseja entre aspas
//exemplo
const c2=document.getElementById('c2')
c2.innerHTML="Novo texto"//usando essa linha o texto do elemento com id c2 foi alterado para "Novo texto"
c2.style.backgroundColor='blue'//mudando a cor de fundo do elemento com id c2 atravez do js


//Pegando todos os elementos guardando em um array para mudar o texto de todos
const c3=document.getElementById('c3')
const c4=document.getElementById('c4')
const c5=document.getElementById('c5') //Pegando apenas os 3 elementos que faltavam

const array=[c1,c2,c3,c4,c5]

for(a of array){
    a.innerHTML='novo texto2' //Mudando o texto de todos para novo texro2
    a.style.backgroundColor='gray'//Mudando a cor de fundo
}

array.map((e,i)=>{
    e.innerHTML='Mais um novo texto'
})//usando a função map para mudar o texto de todos os elementos

