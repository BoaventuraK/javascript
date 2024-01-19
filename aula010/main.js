let pessoa={nome:"Alana", idade:19, sexo:"f"}

console.log(pessoa)

let smo="Nome: "+pessoa.nome+"\n"

if(pessoa.idade >= 18){
    smo=smo+"Maior de idade!"
    
    if(pessoa.sexo == "f"){
        smo=smo+"\n"+"Não precisa prestar serviço militar obrigatorio"
    }else{
        smo=smo+"\n"+"Precisa prestar serviço militar obrigatorio"
    }
}else if(pessoa.idade < 18 && pessoa.idade > 0){
    smo="Menor de idade"
}else{
    smo="Essa idade nao exeite, tente novamente!"
}

console.log(smo)
