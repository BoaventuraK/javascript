//Função EVERY
//O every procura por equivalencia, ou seja se todos os elementos do array condizem com a regra estabelecida na função

const arr=document.getElementById('array')
const bt=document.getElementById('bt')
const res=document.getElementById('resu')

const ar=[22,25,19,20,19,18,22]
arr.innerHTML="["+ar+"]"

bt.addEventListener('click', (evt)=>{
    const ret=ar.every((e,i)=>{
        if(e < 18){
            res.innerHTML='Array não conforme na posição: '+i
        }
        return e>=18 // Define a regra para retornar true ou false
    })
    if(ret){
        res.innerHTML='OK'
    }  
})