//array com numeros aleatorios
const fahrenheit = [3, 5, 7, 8, 10, 19, 23, 45, 67]
//arrow function que converte para celsius
//math.round arredonda para o numero interio mais proximo
const convertendoCelsius = fahrenheit.map(num => Math.round((num - 32)* 5/9))

console.log(convertendoCelsius);