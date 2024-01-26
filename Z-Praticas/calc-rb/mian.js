const n1=document.getElementById("n1")
const n2=document.getElementById("n2")
const rbs=[...document.getElementsByClassName("rbs")]
const calc=document.getElementById("calc")
const res=document.getElementById("resp")

const op=[
    (v1,v2)=>{return v1+v2},
    (v1,v2)=>{return v1-v2},
    (v1,v2)=>{return v1*v2},
    (v1,v2)=>{return v1/v2}
]

calc.addEventListener("click",(evt)=>{
    const v1=n1.value
    const v2=n2.value

    if(v1!='' || v2!=''){
        rbs.map((el,i)=>{
            if(el.checked){
                res.innerHTML=op[i](Number(n1.value),Number(n2.value))
            }
        })
    }else{
        alert("Por favor, Digite um numero!")
    }

})
