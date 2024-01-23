const cx=document.getElementById('cx2')
const btAddA=document.getElementById('addA')
const btAddD=document.getElementById('addD')
const btDel=document.getElementById('delete')
const btSel=document.getElementById('selec')
const nomeCurso=document.getElementById('newCurso')
const cursos=["HTML","CSS","JavaScript","PHP","MySQL","React","ReactNative"]

let ind=0
const addCurso=(nome)=>{
    const newEl=document.createElement('div')
    newEl.setAttribute('class', 'cursos')
    newEl.setAttribute('id', 'c'+ind)
    newEl.innerHTML=nome

    const comandos=document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb=document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rbCursos')

    cx.appendChild(newEl)
    newEl.appendChild(comandos)
    comandos.appendChild(rb)

    return newEl
}

cursos.map((e, i)=>{
    addCurso(e)
    ++ind
})

const cursoSelecionado=()=>{
    const tdsRadio=[...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado=tdsRadio.filter((el)=>{
        return el.checked
    })
    return radioSelecionado[0]
}

btSel.addEventListener('click', (evt)=>{
    const radioSelecionado=cursoSelecionado()
    try{
        const cursoS=radioSelecionado.parentNode.previousSibling.textContent
        alert('Curso selacionado: '+cursoS)
    }catch(ex){
        alert('Selecione um curso!')
    }
    
})

btDel.addEventListener('click', (evt)=>{
    const radioSelecionado=cursoSelecionado()

    try{
        const cursoS=radioSelecionado.parentNode.parentNode
        cursoS.remove()
    }catch(ex){
        alert('Selecione um curso!')
    }
        
})

btAddD.addEventListener('click',(evt)=>{
    const radioSelecionado=cursoSelecionado()
    try{
        if(nomeCurso.value != ''){
            const cursoS=radioSelecionado.parentNode.parentNode
            const novo=addCurso(nomeCurso.value)
            cx.insertBefore(novo, cursoS)
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert('Selecione um curso!')
    }
})

btAddA.addEventListener('click',(evt)=>{
    const radioSelecionado=cursoSelecionado()
    try{
        if(nomeCurso.value != ''){
            const cursoS=radioSelecionado.parentNode.parentNode
            const novo=addCurso(nomeCurso.value)
            cx.insertBefore(novo, cursoS.nextSibling)
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert('Selecione um curso!')
    }
})
