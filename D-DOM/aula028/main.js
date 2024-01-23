const cTodos=[...document.getElementsByClassName("cursos")]
const c1=[...document.getElementsByClassName('c1')]
const c2=[...document.getElementsByClassName('c2')]

c2.map((e)=>{
    e.classList.add("destaque")//Esse atributo da dizendo que todos os elementos com a class cursos vao receber a class destaque
})
