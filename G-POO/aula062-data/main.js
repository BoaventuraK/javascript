const pData=document.getElementById("pData")
const data=new Date()//declaração do um obj da clase Date


console.log(data)

let dia=data.getDate()
dia=dia<10?"0"+dia:dia
let mes=Number(data.getMonth()+1)
mes=mes<10?"0"+mes:mes

const dataNow=`${dia}/${mes}/${data.getFullYear()}`


pData.innerHTML=dataNow

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
