//Entendendo o metodo Toggle
const cx=document.getElementById('cx2')
const btAddA=document.getElementById('addA')
const btAddD=document.getElementById('addD')
const btDel=document.getElementById('delete')
const btSel=document.getElementById('selec')
const nomeCurso=document.getElementById('newCurso')
const cursos=["HTML","CSS","JavaScript","PHP","MySQL","React","ReactNative"]


const tirarSelecao=()=>{
    const elSelecionado=[...document.getElementsByClassName('selecionado')]
    elSelecionado.map((e)=>{
        e.classList.remove('selecionado')
    })
}

let ind=0
const addCurso=(nome)=>{
    const newEl=document.createElement('div')
    newEl.setAttribute('class', 'cursos')
    newEl.setAttribute('id', 'c'+ind)
    newEl.innerHTML=nome
    newEl.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })

    cx.appendChild(newEl)

    return newEl
}

cursos.map((e)=>{
    addCurso(e)
    ++ind
})

const cursoSelecionado=()=>{
    const cs=[...document.querySelectorAll('.selecionado')]
    return cs[0]
}

btSel.addEventListener('click', (evt)=>{
    try{
        alert('Curso selacionado: '+cursoSelecionado().innerHTML)
    }catch(ex){
        alert('Selecione um curso!')
    }
    
})

btDel.addEventListener('click', (evt)=>{
    try{
        cursoSelecionado().remove()
    }catch(ex){
        alert('Selecione um curso!')
    }
        
})

btAddD.addEventListener('click',(evt)=>{
    try{
        if(nomeCurso.value != ''){
            const novo=addCurso(nomeCurso.value)
            cx.insertBefore(novo, cursoSelecionado())
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert('Selecione um curso!')
    }
})

btAddA.addEventListener('click',(evt)=>{
    try{
        if(nomeCurso.value != ''){
            const novo=addCurso(nomeCurso.value)
            cx.insertBefore(novo, cursoSelecionado().nextSibling)
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert('Selecione um curso!')
    }
})
