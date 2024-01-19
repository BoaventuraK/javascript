//Operadores Bitwise (Operão os bits)
//Funciona basicamente como as tabelas verdade de binarios

let n1=11
let n2=14
let n3=10

let res=n1&n2 //Vai fazer uma comparação nos valores das variaveis em binario e compara, onde tiver 1 equivalente vai retornar 1, nso demis casos vai retornar 0

//n1 = 11 = 0000[1]0[1]1
//n2 = 14 = 0000[1]1[1]0

//Comparando fica 00001010 que é o codigo binario que repesenta o 10
//Logo a variavel res deve retornar o valor 10, considerando os valores auais das variaveis n1(11) e n2(14)

console.log(res)


res=n1|n3 //Vai fazer uma comparação, porem nesse caso, vai retornar sempre que ouver o 1, independete se tem equivalendcia ou nao

//n1 = 11 = 0000[1]0[1]1
//n3 = 10 = 0000[1]0[1]0

console.log(res) // nesse caso vai retornar 00001011 que é igual a 11, considerando os valores auais das variaveis n1(11) e n3(10)


res=n1^n3 //Vai fazer uma comparação, porem nesse caso, vai retornar somente qunado for diferente, ou seja quando um for 1 e no outro for 0

//n1 = 11 = 0000101[1]
//n3 = 10 = 0000101[0]

console.log(res) // nesse caso vai retornar 00000001 que é igual a 1, considerando os valores auais das variaveis n1(11) e n3(10)


res=n3<<1 //Deslocando um bit de n1 para esquerda, o valor depois do << define quandotos bits serão deslocados, ou seja, todos os bit 1 ou 0 serão jogados uma casa apra frente e a casa que ficou vazia sera completada com 0
//no caso de n3 = 10 = 00001010(em binario), vai ficar 00010100, que seria a representação do numero 20

//Ao fazer a operação a cima com o valor de deslocamento em um o resultado vai ser sempre o dobro

console.log(res)


res=n3>>1 //Deslocando um bit de n1 para direita, o valor depois do << define quandotos bits serão deslocados, ou seja, todos os bit 1 ou 0 serão jogados uma casa apra tras
//no caso de n3 = 10 = 00001010(em binario), vai ficar 00000101, que seria a representação do numero 52

console.log(res)

//Ao fazer a operação a cima com o valor de deslocamento em um o resultado vai ser sempre metade

//O deslocamento define qunatas vezes vai ser dobrado o valor (se o deslocamento for para a esquerda) ou repartido na metade (se o deslocamento fo apra direita)
