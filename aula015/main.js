//contiune: se usado em uma condicional dentro de um loop, qunado a condição for atendida ele pula aquela iteração

let max=100,par=0

for(let i=0; i<max; i++){
    if(!(i%2) != 0){
        continue
    }
    par++
}

console.log("existem",par,"numeros pares no intervalo")
