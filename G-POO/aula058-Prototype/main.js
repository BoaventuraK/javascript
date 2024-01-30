//Prototype: Serve para quando é preciso adicionar uma propriedade ou um metodo a um obj, principalemnte para objs de função

const Nav=function(enrg){
    this.enrg=enrg
    this.disparos=100
}

const n1=new Nav(100)

console.log(Nav)
console.log(n1)
console.log(n1.disparos)

Nav.prototype.vida=9//Criando um novo atributo fora da classe atraves de um prototype
console.log(n1.vida)

Nav.prototype.disparar=function(){//Criando um novo metodo fora da classe atraves de um prototype
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(n1.disparos)
