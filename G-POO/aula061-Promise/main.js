const cx=document.getElementById("cx")
const btn=document.getElementById("btn")

let prom=()=>{
    let promessa=new Promise((resolve,reject)=>{ //criando a promessa
        let tempo=3000
        let resultado=true
        setInterval(()=>{
            if(resultado){
                resolve("Deu certo!")
            }else{
                reject("Deu errado!")
            }
        },tempo)
    })
    
    promessa.then((resultado)=>{//then é usado pra configurar caso de certo
        cx.innerHTML=resultado
        cx.classList.add("ok")
        cx.classList.remove("erro")
    })
    
    promessa.catch((resultado)=>{//catch é usado par configurar caso de errado
        cx.innerHTML=resultado
        cx.classList.add("erro")
        cx.classList.remove("ok")
    })
}
btn.addEventListener("click",(evt)=>{
   prom()
    cx.innerHTML="Processando..."
})
