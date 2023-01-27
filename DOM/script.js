//FAZ FUNCIONAR

//seleciona todas as divs
const celulas = document.querySelectorAll(".celula")
//variavel para saber de quem é a vez
let checkTurn = true

const jogadorX = "X" 
const jogadorO = "O"  

//array com todas as combinações que possam ganhar
const posicoes = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//adicona um evento de click
document.addEventListener('click', (event)=>{
 //faz com oq o click so funcione quando clicar nas celulas     
    if (event.target.matches(".celula")) {
        //chamando a função 
        jogar(event.target.id)
        
    }
})
//função q marca onde cada jogador jogou 
function jogar(id) {
    const celula = document.getElementById(id)
//if ternario q checa de qm é a vez de jogar
// true é a vez do jogador X
// false é a vez do jogador O
    turn = checkTurn ? jogadorX : jogadorO
//classList adiciona uma classe a cada jogada de cada jogador 
    celula.classList.add(turn)

//faz com oq ao clicar insira o X
//cria o erro de so inserir o X
    celula.textContent = turn 
    checkTurn = !checkTurn
    checaVencedor(turn)
}




//checar se ouve um ganhador
function checaVencedor(turn) {
    //some percorre o array de combinações para verificar se ouve um ganhador
    //definição dp some, se uma afirmação estiver correta retorna true
    const vencedor = posicoes.some((comb)=>{
        //o every chega se TODOS os lugares estao prenchidos de forma que haja um ganhador,
        //exemplo [0,1,2]
        //o everu chega se o 0, 1, e 2 entao corretos
        //o some checa se um dessas forma esta correta, a forma inteira e nao so as posições em si
        //o some olha se o objeto inteiro esta correto
        //definição every, se todos estiverem corretos ela retorna true
        return comb.every((index)=> {
            //retorna a celula que foi clicada pelo jogador da vez
            return celulas[index].classList.contains(turn)
        })
    })
    if (vencedor) {
        encerraJogo(turn)
    } else if (checaEmpate()) {
        encerraJogo()
    } else {
        checkTurn != checkTurn
    }
}

function checaEmpate() {
    let x = 0
    let o = 0
        //isNaN é uma propriedade do js q chega se é num numero
        for (index in celulas){
            if (!isNaN(index)) {
            
            if(celulas[index].classList.contains(jogadorX)){
                x++
            }

            if(celulas[index].classList.contains(jogadorO)){
                o++
            }
            }
        }
            return x + o === 9 ? true : false

}

//o paramentro
//faz com oq se a função nao vier com parametro o valor sera nulo
function encerraJogo(vencedor = null) {
    const telaEscura = document.getElementById("#telaEscura")
    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")
    let msg = null

    telaEscura.style.display = "block"
    //appendChild insera os elementos na tela escura
    telaEscura.appendChild(h2)
    telaEscura.appendChild(h3)

    if (vencedor) {
        h2.innerHTML = `O vencedor foi <span>${vencedor}</span>, Parabéns`
    } else {
        h3.innerHTML = "Empatou, jogue novamente"
    }


    let contador = 3
    setInterval(() => {
        h3.innerHTML = `Reiniciando partida em ${contador--}`
    }, 1000)
    setInterval(() => location.reload(),4000)
}