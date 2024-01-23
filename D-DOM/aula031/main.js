const cx1=document.getElementById('cx1')
const cx2=document.getElementById('cx2')
const btn=document.getElementById('btnCopi')

const crs=[...document.querySelectorAll('.cursos')]

crs.map((e)=>{
    e.addEventListener('click',(evt)=>{
        const el=evt.target
        el.classList.toggle('select') //o toggle funcionama como um add e um remove juntos, ou seja, se nao estiver adicionado ele adiciona, e se estiver ele remove
        console.log(el.innerHTML+" Foi selecionado")
    })
})

btn.addEventListener('click',()=>{
    const slc=[...document.querySelectorAll('.select')]
    const sl=[...document.querySelectorAll('.cursos:not(.select)')]
    slc.map((e)=>{
        cx2.appendChild(e) //appendChild serve, nesse caso, para add um novo filho a section com id cx2 
    })

    sl.map((e)=>{
        cx1.appendChild(e)
    })
})
