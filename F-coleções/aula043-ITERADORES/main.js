//Iteradores: Coleções iteraveis são coleções que retornão um indice que permite trabalhas com os elementos dela mais livremente
/*
Exemplos de coleções iteraveis:
    -Arrays
    -Strings
    -Map
    -Sets
*/
const val=[2,3,4,5,6]
const it=val[Symbol.iterator]()//Iterador criado para ver como eles operão, toda lista iteravel tem iterador por padrão 

console.log(val)
//A finção next tem dois retornos, um o valor do array na posição indicada, outro que retorna true ou false, se retornar false significa que o array não acabou, se retornar true seginifica que acabou
//A cada vez que o next é chmado ele pula pro proximo valor, começando da posição 0 e indo ate a ultima
console.log(it.next())//it=0
console.log(it.next())//it=1
console.log(it.next())//it=2
console.log(it.next())//it=3
console.log(it.next())//it=4
console.log(it.next())//it=5: não existe a posição 5, ou seja o vetro acabou, retornando assim true, ou seja vc pode parar de percorrer os elementos da coleção
//Dessa forma as funções qeu iterão conseguem saber quando o array acabou e eles podem para de realizar a execução
