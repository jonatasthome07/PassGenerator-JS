//Elements
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")

//Functions
const symbols = "@#$%&?!\|><{}[]*()"

function getSymbols (){
    return symbols[Math.floor(Math.random() * symbols.length)].toString()
}

console.log(getSymbols())

//Events
generatePasswordButton.addEventListener("click",()=>{
    console.log("Teste!")
})