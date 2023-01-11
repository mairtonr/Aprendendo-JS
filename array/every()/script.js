//array
const number = [2, 4, 6, 7, 9]
//o every() é parecido com o filter, soq ele retorna em boolean,ou seja, true or false
const verif = number.every((elem) => elem >= 10)

console.log(verif);