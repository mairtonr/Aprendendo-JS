//array
const numeros = [11,22,32,46,58,14,54,1,53,72,48,95]
//filter filtra os numeros q nao sao repetidos
//indexof() mostra onde cada elemento esta no array, (posição do elemento)
const filtro = numeros.filter((elem, index, arr)=> arr.indexOf(elem) = index)
console.log(filtro);