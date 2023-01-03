//função acionada apos o click, e adiciona e cria os li da lista
function add() {
    document.getElementById("btn").addEventListener('click', function() {
        //seleciona o ID da UL
        let lista =  document.getElementById("elementos")
        //seleciona o ID do INPUT
        let text =  document.getElementById("input1")
        //cria uma li 
        let li = document.createElement("li")
        //da valor a li
        li.textContent = text.value
        //lembre de nao colocar aspas
        //insere a tag li na lista
        lista.appendChild(li)
        text.value = ""
        //deixa o mouse no input
        text.focus()
    })
}
//lê e após isso aciona a função
window.addEventListener('load', add())