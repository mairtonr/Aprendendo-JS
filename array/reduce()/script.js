//array com objetos
const foguete =[
    {país: "Russia", lançou: 32},
    {país: "Brasil", lançou: 12},
    {país: "China", lançou:40},
    {país: "Japão", lançou: 24},
    {país: "USA", lançou: 22},
    {país: "Australia", lançou: 11}
]
//reduce esta somando os "lançou" de cada país
const total = foguete.reduce((prevVal, elem)=>prevVal+elem.lançou,0)
console.log(total);