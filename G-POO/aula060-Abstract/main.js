//Abstract: Dentro do js ele não existe efetivamente, porem é possivel simulalo, fazendo com que o conceito de abstract funcione em js
//Uma classe abstrata é uma classe que não pode ser instanciada, ou seja, sela so serve como base para suas classes filho   

class CarroPadrao{
    constructor(){
        if(this.constructor === CarroPadrao){
            throw new TypeError("A classe CarroPadrão não pode ser instânciada")//cria uma exeção de erro para caso a classe seja instanciada, tornando impossiuvel criar um objt apartir dela 
        }
        if(this.ligar===undefined){
            throw new TypeError("Toda classe que herda CarroPadão tem que ter o metodo ligar")//Obriga todas as classes filhas a terem o metodo
        }
        if(this.desligar===undefined){
            throw new TypeError("Toda classe que herda CarroPadão tem que ter o metodo desligar")
        }
        
        this.rodas=4
        this.portas=4
        this.ligado=false
    }    
}

class Carro extends CarroPadrao{
    constructor(tipo,estagioTutbo){
        super()
        this.turbo=new Turbo(estagioTutbo)
        if(tipo==1){
            this.velMax=100
            this.nome="Normal"
        }else if(tipo==2){
            this.velMax=200
            this.nome="Esportivo"
        } 
        this.velMax+=this.turbo.pot
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`VelMax: ${this.velMax}`)
        console.log(`Potencia do turbo: ${this.turbo.pot}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Ligato: ${(this.ligado?"SIM":"NÃO")}`)
        console.log(`-------------------------`)
    }
    
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
}
class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
        }
    }
}

class Especial extends Carro{
    constructor(estagioTutbo){
        super(3,estagioTutbo)
        this.inf=1
        this.velMax=300+this.turbo.pot
        this.nome="Especial"
    }

    info(){
        if(this.inf==1){
            super.info()
        }else{
            console.log(`N: ${this.nome}`)
            console.log(`Vm: ${this.velMax}`)
            console.log(`Pturbo: ${this.turbo.pot}`)
            console.log(`-------------------------`)
        }
        
    }
}

const c1=new Carro(1,2)
const c2=new Carro(2,1)
const c3=new Especial(1)

c1.info()
c2.info()
c3.info()

