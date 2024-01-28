//Criando metodos, e metods get e set
class Carro{
    letructor(nome,tipo){
        this.nome=nome
        if(tipo==1){
            this.tipo="Luxo"
            this.velMax=300
        }else if(tipo==2){
            this.tipo="Esportivo"
            this.velMax=450
        }else if(tipo==2){
            this.tipo="Popular"
            this.velMax=210
        }else{
            this.tipo="Militar"
            this.velMax=330
        }
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelMax(){
        return this.velMax
    }

    getInfo(){
        return [this.nome,this.tipo,this.velMax]
    }

    setNome(nome){
        this.nome=nome
    }

    setTipo(tipo){
        this.tipo=tipo
    }

    setVelMax(velMax){
        this.velMax=velMax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`VelMax: ${this.velMax}`)
        console.log(`----------------------`)
    }
}

let c1=new Carro("Caro",1)
let c2=new Carro("Não tenho ideia",2)
let c3=new Carro("Devia ser barato e não é",3)
let c4=new Carro("Teoricamente pra guerra",4)
let c5=new Carro("TESTE",1)


console.log(c1.info())
console.log(c2.info())
console.log(c3.info())
console.log(c4.info())
console.log(c5.info())

c5.setNome("Mais um")
c5.setTipo(2)
c5.setVelMax(340)

console.log(c5.info())
