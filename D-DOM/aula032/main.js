//Parando a propagação de um evento com o método stopPropagation
//Se um evento é acionado por uma tag pai, suas tags filhos tbm vão executar o evento, ou seja, todos os filhos da tag tbm executão o evento de click, por exemplo, caso sejam clicados

const cx=document.getElementById('cx1')
const cursos=[...document.querySelectorAll('.cursos')]

cx.addEventListener('click', ()=>{
        console.log("clicou")
})

cursos.map((e)=>{
    e.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})

