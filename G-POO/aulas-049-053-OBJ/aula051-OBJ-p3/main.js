const nome=document.getElementById("nome")
const idade=document.getElementById("idade")
const bt=document.getElementById("bt")
const res=document.getElementById("res") 

let pessoas=[]

const addPessoas=()=>{
    res.innerHTML=""
    pessoas.map((el,i)=>{
        const div=document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML=`| id: ${i+1} | Nome: ${el.getNome()} | Idade: ${el.getIdade()} | <br>`
        res.appendChild(div)
    })
}

bt.addEventListener('click',(evt)=>{
    const p=new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()
    // const form=`| Nome: ${p.getNome()} | Idade: ${p.getIdade()} | <br>`
    // res.innerHTML+=form
    addPessoas()
})

class Pessoa{
    constructor(nome, idade){
        this.nome=nome
        this.idade=idade
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome=nome
    }

    setIdade(idade){
        this.idade=idade
    }
}