//Função com retorno

function par_ou_impar(){
    let n1 = 9
    let n2 = 7
    let res = n1+n2
    if(!(res%2)){
        return res+" É PAR" //Define o retorno da função
    } else{
        return res+" É IMPAR" //Define o retorno da função
    }
}

console.log(par_ou_impar()) //Imprime o retorno da função
