//Arrow function
//Mecanismos consizo para representar funções anonimas 
//Um tipo de declaração de funçõa anonima
//Ao inves da nomeclatura finction se usa a => 

const soma=(v1,v2) =>{return v1+v2}
console.log(soma(3,5), "\n\n")

//Quando se tem apenas um paramentro os parenteses não são nessesarios 

const nome=n=>{return n}
console.log(nome("Alana"), "\n\n")

//O return não é nessesario quado tiver apenas uma linha na arrow function

const pot=p=>p*p

console.log(pot(3), "\n\n")
