//Excluindo elementos html pelo js

const cx=document.getElementById('cx1')
const cursos=["HTML","CSS","JavaScript","PHP","MySQL","React","ReactNative"]

cursos.map((e,i)=>{
   let keyId=i+1
    const newEl=document.createElement('div')
    newEl.setAttribute('id', 'c'+keyId)
    newEl.setAttribute('class', 'cursos')
    newEl.innerHTML=e

    const deleteIcon=document.createElement('i')
    deleteIcon.innerHTML='delete'
    deleteIcon.setAttribute('class', 'material-symbols-outlined')
    deleteIcon.addEventListener('click',(evt)=>{
        cx.removeChild(evt.target.parentNode)
    })
    
    cx.appendChild(newEl)
    newEl.appendChild(deleteIcon)
})

