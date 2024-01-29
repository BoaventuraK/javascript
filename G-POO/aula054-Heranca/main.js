//Herança em POO
class Carro{ //Classe PAI
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

class Militar extends Carro{//Classe FILHO
    constructor(nome,portas,blindagem,municao){//no construtor da classe filho se passam os mesmo parametros do pai e os parametros especifucos do filho
        super(nome,portas)//Super vai mandar os parametros passados para a classe pai
        this.blindagem=blindagem
        this.municao=municao
    }

    atirar=function(){
        this.municao--
    }
}

const c1=new Militar("Caçador",2,100,350)
c1.setCor("verde militar")//Usando um metodo da classe pai em um obj da classe filho
c1.ligar()
c1.atirar()
c1.atirar()
c1.atirar()
c1.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Cor: ${c1.cor}`)
console.log(`Ligado:${(c1.ligado)?"SIM":"NÃO"}`)
console.log(`vel: ${c1.vel}`)
console.log(`blindagem: ${c1.blindagem}`)
console.log(`Munição: ${c1.municao}`)
console.log("---------------------------")