//Elements
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")

//Functions
const symbols = "@#$%&?!\|><{}[]*()"

function LetterLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function LetterUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getSymbols (){
    return symbols[Math.floor(Math.random() * symbols.length)].toString()
}

function getNumber (){
    return Math.floor(Math.random() * 10).toString()
}

console.log(getSymbols())
console.log(LetterLowerCase())
console.log(LetterUpperCase())
console.log(getNumber())

//Events
generatePasswordButton.addEventListener("click",()=>{
    console.log("Teste!")
})