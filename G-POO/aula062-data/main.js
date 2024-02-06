const pData=document.getElementById("pData")
const relogio=document.getElementById("relogio")
const define_alarme=document.getElementById("define_alarme")
const bt_ativar=document.getElementById("bt_ativar")
const bt_para=document.getElementById("bt_parar")
const hora_alarme=document.getElementById("hora")

const som_alarme=new Audio("alarme.mp3")//pegando um audio atravez do js 
som_alarme.loop=1

let ts_atual=null//O tempo quando o alarme for definido
let ts_alarme=null//O tempo acrcido do tempo definido pro alarme
let alarme_ativado=false
let alarme_tocando=false

bt_ativar.addEventListener("click",(evt)=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(define_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)
    let hora=dt_alarme.getHours()
    hora=hora<10?"0"+hora:hora
    let minuto=dt_alarme.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto
    let segundos=dt_alarme.getSeconds()
    segundos=segundos<10?"0"+segundos:segundos
    hora_alarme.innerHTML+=` ${hora} : ${minuto} : ${segundos}`
})

bt_para.addEventListener("click",(evt)=>{
    alarme_tocando=false
    alarme_ativado=false
    hora_alarme.innerHTML="Hora alarme:"
    define_alarme.value=0
    som_alarme.pause()
    som_alarme.currentTime=0
})





const data=new Date()//declaração do um obj da clase Date

console.log(data)

let dia=data.getDate()
dia=dia<10?"0"+dia:dia
let mes=Number(data.getMonth()+1)
mes=mes<10?"0"+mes:mes

const dataNow=`${dia}/${mes}/${data.getFullYear()}`

pData.innerHTML=dataNow

const rel=()=>{
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora
    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto
    let segundos=data.getSeconds()
    segundos=segundos<10?"0"+segundos:segundos

    const horaFormatada=`${hora}:${minuto}:${segundos}`
    relogio.innerHTML=horaFormatada

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
        }
    }
}

const horaAtual=setInterval(rel,1000)

// data.getDate() - Dia do mes
// data.getDay() - Dia da semana (numero)
// data.getFullYear() - Ano com 4 digitos
// data.getHours() - Horas
// data.getMilliseconds() - Milisegundos
// data.getMinutes() - Minutos
// data.getMonth() - Mes
// data.getSeconds() - Segundos
// data.getTime() - Timestamp (milisegundos desde 1 jan de 1970, 00:00:00 UTC)
// Date.now() - Timestamp (milisegundos desde 1 jan de 1970, 00:00:00 UTC)
// data.getTimezoneOffset() - Timezone da localidade 
// data.setDate() - Define um dia do mes para a data
// data.setMonth - Define um mes para a data
// data.setFullYear() - Define um ano para a data
// data.setHours() - Define horas
// data.setMinutes() - Define minutos 
// data.setSeconds() - Define segundos 
// data.setMilliseconds() - Define milisegundos 
// data.toDateString() - Retorna somente a data
