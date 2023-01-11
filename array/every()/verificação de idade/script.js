const pessoas = [
    {name: "Neto", age:19},
    {name: "Ze", age:29},
    {name: "enzo", age:9},
    {name: "martin", age:20},
    {name: "andreia", age:45}
]

const verif = pessoas.every((p) => p >= 18)
console.log(verif);