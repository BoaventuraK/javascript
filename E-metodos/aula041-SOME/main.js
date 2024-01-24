//Metodo SOME: alguns
//Retorna true quando pelo menos um dos elementos do array atende a regra 

const arr=document.getElementById("array")
const res=document.getElementById("resu")
const bt=document.getElementById("bt")

const ar=[12,32,43,54,14,25]
arr.innerHTML=ar

bt.addEventListener('click',(evt)=>{
    res.innerHTML='Nenhum um dos elementos segue a regra'
    const rt=ar.some((e)=>{
        return e>=18
    })

    if(rt){
        res.innerHTML='Pelo menos um elemento segue a regra'
    }
})