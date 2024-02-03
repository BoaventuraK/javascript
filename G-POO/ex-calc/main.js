const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const res=document.querySelector(".res")
const dp=document.querySelector("#dp")
const cl=document.querySelector("#del")

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(dp.innerHTML == 0){
            dp.innerHTML=evt.target.innerHTML
        }else{
            dp.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(dp.innerHTML == 0){
            dp.innerHTML=evt.target.innerHTML
        }else{
            dp.innerHTML+=evt.target.innerHTML
        }
    })
})

cl.addEventListener("click",(evt)=>{
    dp.innerHTML=0
})
