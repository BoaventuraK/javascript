//Metodo REDUCE
//Permite fazer uma redução do array
//O novo array vai ser formado de acordo com as regras especificadas no codigo

const arr=document.getElementById("array")
const bt=document.getElementById("bt")
const res=document.getElementById("resu")

const ar=[1,2,3,4,5]
let ant=[]
let atu=[]
let dob=[]

arr.innerHTML="["+ar+"]"

bt.addEventListener('click',(evt)=>{
    dob.push(ar [0]*2)
    res.innerHTML=ar.reduce((anterior,atual,i)=>{
        ant.push(anterior)
        atu.push(atual)
        dob.push(atual*2)

        return anterior+atual
    })
    res.innerHTML+="<br>V.Anterios: "+ant+"<br>V.atual: "+atu+"<br>V.Dobro: "+dob
    
})