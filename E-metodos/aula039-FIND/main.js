//Metodo FIND, permite pesqueisar de modo simples um elemento dentro de um array 
//Permite pesqueisar pelor um elemento de um array e retorna o mesmo quando o encontra
//se o elemento existir no array ele retorna true, se nao tiver ele retorna undefined

const arr=document.getElementById('array')
const inp=document.getElementById('inp')
const btn=document.getElementById('bt')
const res=document.getElementById('resu')

const el=["HTML","CSS","JS","PHP"]
arr.innerHTML="["+el+"]" //Colocando o array el dinamicamente no p de id array

btn.addEventListener('click',(evt)=>{ //criando evento de click no botao
    
    if(inp.value != ''){ //Verificando se o input não ta vasio
        res.innerHTML="Valor não encontrado!"
        el.find((e,i)=>{ //Essa função faz a busca de valores
            if(inp.value.toUpperCase()==e.toUpperCase()){ //varifica se um dos valores encontrados é o desejado
                res.innerHTML="Valor encontrado: "+e+" -- posição: "+i
                return e
            }
        })
    }else{
        alert('Digite um numero no campo de texto!')
    }

})

//A função toUpperCase trasforma todas as letras da string em maiusculas