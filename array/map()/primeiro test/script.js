//1° forma de fazer 

//array com numeros
const numbers = [1, 3, 56, 78, 13, 22, 12]
//função anonima no map, onde dobre os numeros dentro do array
  const double = numbers.map(function double(number) {
    return number * 2
 }) 
 console.log(double)

//2° forma de fazer

 //mesma coisa, so que sem a função anonima
function double2(nuns) {
    return nuns * 2
}
//chama o nome da função dentro dos parenteses
const nuns1 = numbers.map(double2)
console.log(nuns1) 

//3° forma de fazer 
//arrow function 
const number = numbers.map(num => num *2)
console.log(number)