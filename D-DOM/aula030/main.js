//Eventos em js
//Os eventod funcionao inicialmente com uma junção entre o js que define as funções e o html que devine qual sera o evento que vai acionar a função
//Dentro do html existem diversos eventos como o onclick, onplay. ondbclick, etc
//criando uma função para usar de exemplo

const msg=()=>{
    alert('Funcionaaa')
}

//Porem, usando as formas de pegar os elementos estudadas anteriosmente é possivel fazer tudo isso usando apenas js usando o metodo addEventListener, que recebe como paramentros o evento e a função que ele vai executar, podendo ser essa função uma ja existente ou uma criada no segundo parametro, veja no ex abaixo:

const c2=document.querySelector('#ic2')

c2.addEventListener('click',(evt)=>{ //A variavel evt vai pegar qual elemento html disparou o evento
    const el=evt.target //targuet pega somento o elemento, sem informações exstras, permitindo manipulalo
    el.classList.add('destaque')// esta atribuindo a classe destaque ao elemento que disparou o evento
})

//fazendo varios elementos terem o evento:

const todos=[...document.querySelectorAll('.cursos')]

todos.map((e)=>{ //usando o map para percorrer os elementos
    e.addEventListener('click',(evt)=>{
        const el=evt.target
        el.classList.add('destaque')
        console.log(el.innerHTML+' foi clicado')
    })
})
