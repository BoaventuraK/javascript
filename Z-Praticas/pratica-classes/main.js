const num=document.getElementById("num")
const qObj=document.getElementById("qObj")
const add=document.getElementById("add")
const del=document.getElementById("del")
const palco=document.getElementById("palco")

let larguraPalco=palco.offsetWidth
let alturaPalco=palco.offsetWidth
let bolas=[]
let numBolas=0

class Bolas{
    constructor(arrBol, palco){
        this.tam=Math.floor((Math.random()*10))+10 //define o tamnaho da bola
        this.r=Math.floor((Math.random()*255))//Cor em r
        this.g=Math.floor((Math.random()*255))//Cor em g
        this.b=Math.floor((Math.random()*255))//Cor em b 
        this.px=Math.floor((Math.random()*(larguraPalco-this.tam)))//Posição em x que a bola vai surgir
        this.py=Math.floor((Math.random()*(alturaPalco-this.tam)))//Posição em y que a bola vai surgir
        this.velx=Math.floor(((Math.random()*2)+0.5))//Velocidade em x
        this.vely=Math.floor(((Math.random()*2)+0.5))//Velocidade em y
        this.dirx=(Math.random()*10)>5?1:-1 //Direção em x da bola
        this.diry=(Math.random()*10)>5?1:-1 //direção em y da bola
        this.arrBol=arrBol
        this.palco=palco
        this.id=Date.now()+"_"+Math.floor(Math.random()*100000000000000000)
        this.desenhar()
        this.controle=setInterval(this.controlar,10)
        this.eu=document.getElementById(this.id)
        numBolas++
        num.innerHTML=numBolas
    }

    desenhar=()=>{
        const div=document.createElement("div")
        div.setAttribute("id",this.id)
        div.setAttribute("class","boll")
        div.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }

    remover=()=>{
        clearInterval(this.controle)
        bolas=bolas.filter((e)=>{
            if(e.id!=this.id){
                return e
            }
        })
        this.eu.remove()
        numBolas--
        num.innerHTML=numBolas
    }

    minhaPos=()=>{
        return this.arrBol.indexOf(this)
    }

    colisaoBorda=()=>{
        if(this.px+this.tam >= larguraPalco){
            this.dirx=-1
        }else if(this.px <= 0){
            this.dirx=1
        }

        if(this.py+this.tam >= larguraPalco){
            this.diry=-1
        }else if(this.py <= 0){
            this.diry=1
        }
    }

    controlar=()=>{
        this.colisaoBorda()
        this.px+=this.dirx*this.velx
        this.py+=this.diry*this.vely
        this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`) 
        if(this.px > this.larguraPalco || this.py > this.larguraPalco){
            this.remover()
        }
    }

}

window.addEventListener("resize",(evt=>{
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetWidth
}))//Evento resize esta relacionado ao redimencionamento da tela

add.addEventListener("click",(evt=>{
    const qtdBol=qObj.value
    for(let i=0;i<qtdBol;i++){
        bolas.push(new Bolas(bolas,palco))
    }
}))

del.addEventListener("click",(evt=>{
    bolas.map((e)=>{
        e.remover()
    })
}))