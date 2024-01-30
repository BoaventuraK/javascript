//Static, dentro de um obj, quando se tem um metodo ou atributo statico é possivel incocalo sem ter instanciado a classe. como se os membros staticos pertencesem a classe em si, e não aos objetos instanciados apartir dela
//se for definido o valor de um atributo static da classe todos as instancias (OBJ) vão conseguir ler o mesmo valor

class Npc{
    static alerta=false//Declarando um atributo statico
    constructor(enrg){
        this.enrg=enrg
    }

    info=function(){
        console.log(`Energia: ${this.enrg}`)
        console.log(`Alerta: ${(Npc.alerta?"SIM":"NÃO")}`)
        console.log("-------------------------------")
    }

    static alertar=function(){
        Npc.alerta=true
    }
}

const npc1=new Npc(100)
const npc2=new Npc(90)
const npc3=new Npc(80)

console.log("Antes de alterar o atributo statico:")
npc1.info()
npc2.info()
npc3.info()

// Npc.alerta=true //Altetrando o atributo statico manualmente
Npc.alertar()//Alterando um atributo statico atravez de um metodo statico 

console.log("Depois de alterar o atributo statico:")
npc1.info()
npc2.info()
npc3.info()
