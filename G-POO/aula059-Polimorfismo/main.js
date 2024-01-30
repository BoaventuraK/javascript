//Poilimorfismo: A capacidade de um mesmo metodo ter ações diferentes
class Carro{
    constructor(tipo,estagioTutbo){
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
        console.log(`-------------------------`)
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
        this.inf=0
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

