//Tratando o OBJ como uma função, para se aproximar mais de objs literais

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
        div.innerHTML=`| Nome: ${el.getNome()} | Idade: ${el.getIdade()} | <br>`
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

function Pessoa(nome,idade){
   
    this.nome=nome,
    this.idade=idade,
    

    this.getNome=()=>{
        return this.nome
    },

    this.getIdade=()=>{
        return this.idade
    },

    this.setNome=(nome)=>{
        this.nome=nome
    },

    this.setIdade=(idade)=>{
        this.idade=idade
    }
}