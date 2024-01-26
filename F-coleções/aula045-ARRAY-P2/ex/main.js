const n1=document.getElementById("n1")
const n2=document.getElementById("n2")
const b1=document.getElementById("b1")
const b2=document.getElementById("b2")
const b3=document.getElementById("b3")
const b4=document.getElementById("b4")
const res=document.getElementById("res")

const op=[
    (v1,v2)=>{
        return v1+v2
    },
    (v1,v2)=>{
        return v1-v2
    },
    (v1,v2)=>{
        return v1*v2
    },
    (v1,v2)=>{
        return v1/v2
    }
]

let p=document.createElement("p")
p.setAttribute('id', 'resultado')
res.appendChild(p)

b1.addEventListener('click',(evt)=>{

    p.innerHTML=op[0](Number(n1.value), Number(n2.value))
    
})

b2.addEventListener('click',(evt)=>{

    p.innerHTML=op[1](Number(n1.value), Number(n2.value))
    
})

b3.addEventListener('click',(evt)=>{

    p.innerHTML=op[2](Number(n1.value), Number(n2.value))

    
})

b4.addEventListener('click',(evt)=>{

    p.innerHTML=op[3](Number(n1.value), Number(n2.value))
    
})
