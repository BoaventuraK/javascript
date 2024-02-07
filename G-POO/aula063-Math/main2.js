const olhos=[...document.getElementsByClassName("olho")]


//Criando um evento para pegar a posição do mouse na tela
let mouse_positiox=0
let mouse_positioy=0

window.addEventListener("mousemove",(evt)=>{
    mouse_positiox=evt.clientX//posição x do mouse
    mouse_positioy=evt.clientY//posição y do mouse

    const radiando=Math.atan2(mouse_positioy,mouse_positiox)//atan2 Retorna o arco tangente de duas variaveis em radiando

    const rotacao=radiando*180/Math.PI

    olhos.forEach((e)=>{
        e.style.transform="rotate("+rotacao+"deg)"
    })

})
//Fim do evento mouse

