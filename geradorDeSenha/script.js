const passInupt = document.querySelector('#inputPasswordId')
const lenInput = document.querySelector('#inputLengthdId')
const infoLength = document.querySelector('label[for="labelLegthId"]')
const btnGerar = document.querySelector('#btnGerar')

const chkLower = document.querySelector('#chkLowerId')
const chkUpper = document.querySelector('#chkUpperId')
const chkNumber = document.querySelector('#chkNumberId')
const chkSymbols = document.querySelector('#chkSymbolsId')

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["!", "@", "#", "$", "%"]

const caracters = Array.from(Array(26)).map((_, i)=> i + 97)
const lowerCaseCaracters = caracters.map((item)=> String.fromCharCode(item))
const upperCaseCaracters = lowerCaseCaracters.map((item)=> item.toUpperCase())

infoLength.innerHTML = lenInput.value

lenInput.addEventListener("change", ()=>{
    infoLength.innerHTML = lenInput.value
})

btnGerar.addEventListener("click",()=>{
    genaratePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
    )
})
const genaratePassword = (
    hasNumber,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    Length
) => {
    const newArray = [
        ...(hasNumber ? numbers :[]),
        ...(hasSymbols ? symbols :[]),
        ...(hasLowercase ? lowerCaseCaracters :[]),
        ...(hasUppercase ? upperCaseCaracters :[]),
]

if (newArray.length === 0)return 
    let password = ""
    
    for (let i = 0; i < Length; i++){
        const randomIndex = Math.floor(Math.random()* newArray.length)
    password += newArray[randomIndex]
    }
    passInupt.value = password
}