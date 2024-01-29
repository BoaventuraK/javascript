//Objetos Literais
//Quando se usa o operador new, se cria um obj da clase ao qual ele foi instanciado, e cada obj é independente
//No conceito de objs literais não se tem mais o conceito de obj independente, ou seja se tem um obt unico referenciado na memoria e todos apontão pra esse obj
//Para criar um obj literal usase um variavel e atribui a ela chaves onde ficarão as propriedades e metodos
//exemplo:

const addObj=()=>{
    const Pessoa={
        nome:"",//destro dos objetos literais a atribuição é feita com : e não com o =.
        idade:"",
        getNome:function(){
            return this.nome
        },
    
        getIdade:function(){
            return this.idade
        },
    
        setNome:function(nome){
            this.nome=nome
        },
    
        setIdade:function(idade){
            this.idade=idade
        }
    
        //Usar arraw funcition pode causar alguns bugs
    }
    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade.value)
    p.push(Pessoa)
    nome.value=""
    idade.value=""
    nome.focus()
}

const nome=document.getElementById("nome")
const idade=document.getElementById("idade")
const bt=document.getElementById("bt")
const res=document.getElementById("res")

let p=[]

const addPessoas=()=>{
    res.innerHTML=""
    p.map((el)=>{
        let div=document.createElement("div")
        div.setAttribute("class","pessoas")
        div.innerHTML=`Nome: ${el.getNome()} Idade: ${el.getIdade()} <br>`

        res.appendChild(div)
    }) 
}


bt.addEventListener("click",(evt)=>{
    addObj()//Essa função cria um obj toda vez que o botão é clicado, fazendo assim ter varios espaços reservados na memoria.
    addPessoas()
})

// //A baixo se mostra como todos os objts dessa classe vão sempre ser os mesmos

// const p1=Pessoa
// const p2=Pessoa
// p1.nome="Alana"

// //Tambem é possivel fazer atribuições da seginte forma:
// p2["nome"]="Boaventura"
// p2.setNome("TESTE")

// console.log(Pessoa.nome)
// console.log(p1.getNome())
// console.log(p2.nome)

//O codigo tem um erro que eu não sei como resolver ainda, mas esta funcionando do mesmo jeito
