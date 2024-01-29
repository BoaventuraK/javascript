const nome=document.getElementById("nome")
const portas=document.getElementById("portas")
const blind=document.getElementById("blindagem")
const muni=document.getElementById("municao")
const rNomal=document.getElementById("rNormal")
const rMilitar=document.getElementById("rMilitar")
const btAdd=document.getElementById("btAdd")
const ltCarros=document.getElementById("ltCarros")


rMilitar.addEventListener("click",(evt)=>{
    blind.removeAttribute("disabled")
    muni.removeAttribute("disabled")
    nome.value=""
    portas.value=""
})

rNomal.addEventListener("click",(evt)=>{
    blind.setAttribute("disabled","disabled")
    muni.setAttribute("disabled","disabled")
    nome.value=""
    portas.value=""
    blind.value=0
    muni.value=0
})

let car=[]

const removerCar=(quem)=>{
    car=car.filter((el)=>{
        return el.nome!=quem
    })
}

const admExCarros=()=>{
    ltCarros.innerHTML=""
    car.forEach((el)=>{
        const div=document.createElement("div")
        const btEx=document.createElement("button")

        div.setAttribute("class", "carros")
        div.innerHTML=`| Nome: ${el.nome} | Portas: ${el.portas} |<br>| Cor: ${el.cor} |<br>| Blind: ${el.blindagem} | Muni: ${el.municao}|`
        div.setAttribute("data-nome",el.nome)

        btEx.setAttribute("id","btEx")
        btEx.innerHTML="Remover"
        btEx.addEventListener("click",(evt)=>{
            const quemRemover=evt.target.parentNode.dataset.nome
            removerCar(quemRemover)
            admExCarros()
        })

        div.appendChild(btEx)
        ltCarros.appendChild(div)
    })
}

btAdd.addEventListener("click",(evt)=>{
    if(rNomal.checked){
        const cn=new Carro(nome.value,portas.value)
        car.push(cn)
    }else{
        const cm=new Militar(nome.value,portas.value,blind.value,muni.value)
        car.push(cm)
    }
    admExCarros()
    nome.value=""
    portas.value=""
    blind.value=0
    muni.value=0
})

class Carro{
    constructor(nome, portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }

    ligar=function(){
        this.ligado=true
    }

    desligar=function(){
        this.ligado=false
    }

    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
    }

    atirar=function(){
        this.municao--
    }
}
