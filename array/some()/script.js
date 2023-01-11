//função que realiza a divisão dos numeros nos array
// se o resultado do numero dividido por 2 for zero, ao é primo
function primo(number) {
    for (let i = 2; i < number; i++) {
        if (number % 2 === 0)
        return false
    }
    return number > 1
}
//array
const array = [1, 4, 8, 79, 55, 124]
//verifica se é um numero primo, retorna resultado em boolean
const verif = array.some(primo)

console.log(verif);