// for in e for fo 

let num=[1,2,5,3,6]

for(let i=0; i < num.length; i++){
    console.log(i)
} // for normal, retorna o indice

for(n in num){
    console.log(n)
} //for in, uma meneira mais simplificada do for normal, para percorrer array, retorna o indice

for(m of num){
    console.log(m)
} //for of, semelhnate ao for in en questao de sintax, mas retorna o valor do indice
