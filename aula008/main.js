//Operadores ternarios

//Os chamdos operadores ternarios, são uma fomra de simplificar um concifional if else

//Possui a forma (teste logico) ? (caso a condição seja verdadeira) : (caso falsa)
//Deve-se levar em considerão que 0 = false e 1 = true, e que o ternario le apanas o valor logico da condição

//veja o ex a baixo

let n1=20
let res=(n1%2 ? "Par" : "Impar") //Pela matematica, sabesse que o resto de 10 po 2 é zero, e zero é par, porem nesse caso vai dar impar, pq 0 representa false
console.log(res)

//para corrigir esse erro temos que negar o modulo de n1 por 2, ou usar uma comparação
res=(!(n1%2) ? "par" : "impar")
console.log(res)
