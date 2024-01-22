//Função MAP
//Usada qunado é preciso percorrer elemento por elemento de uma coleção
//Quando é necessario iterar todos os elementos da colelção, ja que não é possivel parar a execução no meio

const cursos=['HTML','CSS','JS','PHP']

cursos.map((el,i)=>{ //el vai receber os elementos e i vai receber o indice, vamos usar uma função para imprimir esses elementos e indices
    console.log('Curso:',el,'-Indice:',i)
})

//Podia usar o for para realizar essa ação, porem ele é mais recomendado quando vc quer parar em determinado indice, mas como o map é mais otimizado ele é recomendado caso va usar todos os elementos da coleção 

//Usando o map para manipelar o html

let elm=document.getElementsByTagName('div')//Usando o dom para pegar os elementos das div
elm=[...elm]//Trasformando a coleção de elementos html em um array
console.log(elm)//Imprimindo o array gerado
elm.map((e,i)=>{//Percorrendo o array gerado apartir das div
    e.innerHTML='Textos mudados' //Usando o InnerHTML para mudar o texto de cada div
})

