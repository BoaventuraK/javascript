//Funções anonimas
//Tem por definição ser uma função que não é isntanciada assim que criada, so sendo criada no momento da execução
//Não precisa de um nome para uma função anonima
//Para isso vc vai associar a função a uma variavel, para que quando a variavel for chamada ela executar a função
//Exemplo

const f=function(...val){
    res=0
    for(v of val){
        res+=v
    }
    return res
}

console.log(f(4,5,6)) //Nota-se que a variavel associada é usada para chamar a função

//Um outro conceito onde a função anonima é usada, é para gerar uma unção construtor, que são finções mais semples que operão como objs
//exemplo de função construtor

const g=new Function("v1","v2","return v1+v2") //Nesse tipo de função iniciace o Funcition com f maiusculo e todo o corpo da função é passado como o ultimo parametro, dessa maneira so sendo usada para funções simples, e tbm tudo que estiver nos parenteses tem que estar entre aspas

console.log(g(1,4))
