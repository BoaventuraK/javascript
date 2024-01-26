//coleção set, tem a peculiaridade de não permitir valores repetidos
const cx=document.getElementById("cx")

let mus=new Set(["m1","m2","m3"])//Estanciando a coleção
//Possu metodos muito semelhantes ao map
//É possivel adicionar elementos diretamente no construtor

mus.add("m4")//O metodo add serve para adicionar novos elementos
mus.add("m1")
mus.add("m1")//Se tentar adicionar um elemento identico a um ja existente o set vai simplesmente ignorar a tentativa
mus.add("m5")

//No set o elemento é sua propria referencia

mus.delete("m1")//delete vai deletar o elemento passado como parametro

console.log(mus)

mus.forEach((el)=>{
    cx.innerHTML+=el+"<br>"
})
