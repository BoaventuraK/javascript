//coverção em JSON: Converter um obj literal em uma string JSON para mandar para api e tratar, e converter um string JSON em obj literal pra poder manipular com js 

const pessoa={
    noem:"Kauan",
    idade:18,
    linguagens:{
        python:"BASICO",
        JavaScript:"BASICO",
        HTML_CSS:"INTERMEDIARIO",
    }
}

const sJson=JSON.stringify(pessoa)//Converte o obj literal em string JSON
const oJson=JSON.parse(sJson)//Converte o a strnig JSON em um obj literal


console.log(pessoa)
console.log(sJson)
console.log(oJson)
