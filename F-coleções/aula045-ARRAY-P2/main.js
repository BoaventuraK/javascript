//Array pt2 - Funções em arrays: É possivel guardar funções dentro de array e executalas
const cx=document.getElementById("cx")
let val=[1,2]
const op=[
    (val)=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    },
    (val)=>{
        let res=1
        for(v of val){
            res*=v
        }
        return res
    },
    (val)=>{
      for(v of val){
        console.log(v)
      }  
    }
]

op.map((el)=>{
    let p=document.createElement('p')
    p.setAttribute('id', 'p')
    p.innerHTML=el(val)

    cx.appendChild(p)
})



