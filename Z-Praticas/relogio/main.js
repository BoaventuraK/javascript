const hora=document.getElementById("hora")
const minuto=document.getElementById("minuto")
const segundo=document.getElementById("segundo")

setInterval(()=>{
    let data=new Date()

    hora.innerHTML=data.getHours()
    minuto.innerHTML=data.getMinutes()
    segundo.innerHTML=data.getSeconds()

},100)
