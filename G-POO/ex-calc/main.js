const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const res=document.querySelector(".res")
const dp=document.querySelector("#dp")
const cl=document.querySelector("#del")
const t_resu=document.querySelector("#t_resu")
const cpy=document.querySelector("#tcpy")
const ctr=document.getElementById("controle")
const calc=document.getElementById("calc")
const seta=document.getElementById("icon")

let operador=false
let separador=false
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        operador=false

        if(evt.target.innerHTML==","){
            if(!separador){
                separador=true
                dp.innerHTML+="."
            }
        }else{
            if(dp.innerHTML == "0"){
                dp.innerHTML=""
            }
            dp.innerHTML+=evt.target.innerHTML
        }
        
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        separador=false
        if(!operador){
            operador=true
            if(dp.innerHTML=="0"){
                dp.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                dp.innerHTML+="*"
            }else{
                dp.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

cl.addEventListener("click",(evt)=>{
    operador=false
    separador=false
    dp.innerHTML=0
})

t_resu.addEventListener("click",(evt)=>{
    operador=false
    separador=false
    const res=eval(dp.innerHTML)//A função avalia a expreção passada como parametro e, pro exemplo, se for uma operação matematica ele a resolve
    dp.innerHTML=res
})

cpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(dp.innerHTML)
})  

ctr.addEventListener("click",(evt)=>{
    // if(calc.getAttribute("class", "calc_ex")){
    //     calc.removeAttribute("class","calc_ex")
    //     dp.innerHTML=0
    // }else{
    //     calc.setAttribute("class","calc_ex") 
    // } 
    //Primeira solução que pensei, funcional, mas não a mais adequada
    calc.classList.toggle("calc_ex")
    dp.innerHTML=0
    if(seta.innerHTML=="chevron_right"){
        seta.innerHTML="chevron_left"
    }else{
        seta.innerHTML="chevron_right"
    }
    
})
