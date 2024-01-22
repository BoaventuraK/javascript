//Operador this
//this indica que a variavel faz referencia ao elemento da propria função. é usado quando se tem uma variavel com o mesmo nome usada como parametro e usada dentro da função para receber esse paramentro

function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dados_anonimos=function(){
        setTimeout(function(){//o setTimeout cria um atraso na execução da funçã, predeterminado pelo programdos
            console.log(this.nome)
            console.log(this.nota)
        },2000) //O tempo de atraso é o ultimo parametro da função Timeout e é passado em milisegundos
    }//usando o setTimeout a função anonima nao consegue encontrar o thism, por isso nesse caso é usado uma arrow function

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

console.log('iniciou')
const al=new aluno('Fulano',18)
al.dados_anonimos()
al.dados_arrow()
