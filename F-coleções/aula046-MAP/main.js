//coleção MAP
//Enquando no array se adicionam elementos nos indices e a referencia é o proprio elemento no map é nessesario uma chave valor para ser essa referencia

const cx=document.getElementById("cx")

let mapa= new Map()//Declaração da coleção map
//Os meps não possuem a mesma quantidade e variedade de metodos que um array tradiconal, mas ainda assim possuem aguns metodos interesantes

mapa.set("Cursos","JavaScript")
mapa.set(4,1)
mapa.set(3,"Java")
mapa.set("C",2)
//O metodo set serve para adicionar um novo elemtno ao map, onde o primeiro parametro é a chave e o segundo o valor a ser guardado, onde as variaveis podem ser qualquer tipo

if(mapa.has(4)){ //O has serce para verificar se determinada chave existe na coleção
    console.log("A chave existe")
}else{
    console.log("A chave não esta na coleçõa")
}

res=mapa.get("Cursos")
res+="<br> O tamanho da coleção é: "+mapa.size//O size retorna o tamanho da colção
cx.innerHTML=res//get pega o valor referente a chave passada como parametro

mapa.forEach((el)=>{ //forEach percorre toda a coleção
    console.log(el)
})

mapa.delete(3)//delete deleta o elemento cujo a chave foi passada como parametro

console.log("")
console.log("")
console.log("")

mapa.forEach((el)=>{
    console.log(el)
})
