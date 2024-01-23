//querySelector e querySelectorAll

const query_div=document.querySelector("div")//vai pegar a primeira div encontrada

const query_div_all=[...document.querySelectorAll("div")]//vai pegar todos os elementos div do html
//pode-se usar o spring para trasformar a lista em um array

console.log(query_div)
console.log(query_div_all)

//tambem é possivel usar os querySelecto para pegar class e id usando os referenciais iguais aos do css o . e o #
//exemplo:
const c1=[...document.querySelectorAll(".c1")]

console.log(c1)

//É possivel ter mais de um parametro nos querySelecto, separando-os com virgula, dentro das aspas

const parent=[...document.querySelectorAll("div > p")]//Pegando todos os paragrafos que estao dentro de divs

console.log(parent)

const a=[...document.querySelectorAll("div[class]")]//pegando todas as div com o atributo class

console.log(a)
