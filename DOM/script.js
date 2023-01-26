//FAZ FUNCIONAR

//seleciona todas as divs
const celulas = document.querySelectorAll(".celula")
//variavel para saber de qm é a vez
let checkTurn = true

const jogadorX = "X" 
const jogadorO = "O"  
//adicona um evento de click
document.addEventListener('click', (event)=>{
 //faz com oq o click so funcione quando clicar nas celulas     
    if (event.target.matches(".celula")) {
        //chamando a função 
        jogar(event.target.id);
        
    }
})
//função q marca onde cada jogador jogou 
function jogar(id) {
    const celula = document.getElementById(id)
//if ternario q checa de qm é a vez de jogar
// true é a vez do jogador X
// false é a vez do jogador O
    turn = checkTurn ? jogadorX : jogadorO
//faz com oq ao clicar insira o X
//cria o erro de so inserir o X
    celula.textContent = turn
//faz com oq ao clicar, nao insira apenas o X
//cria o erro de ao clicar 2 vezes troca X para O 
    checkTurn = !checkTurn
}

