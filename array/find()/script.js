const pizza = [
    "4 queijos",
    "catupiri",
    "mussarela",
    "frango",
]
//startWith significa começa com
//find verifica em um aray de objetos, qual começa com a letra "m", e para no primeiro encontrado
//é uma busca nos objetos 
const verif = pizza.find((p => p.startsWith('m')))
console.log(verif);