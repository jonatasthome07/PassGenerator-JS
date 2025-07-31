//Elements
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const openPasswordContainer = document.querySelector("#open-generate-password")
const passwordOptions = document.querySelector("#generate-options")
const lettersInput = document.querySelector("#letters")
const symbolsInput = document.querySelector("#symbols")
const numbersInput = document.querySelector("#numbers")
const quantityInput = document.querySelector("#length")
const copyPassword = document.querySelector("#copy-password")

//Functions
const symbols = "@#$%&?!\|><{}[]*()-_+=~^'¨'"

const LetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const LetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getSymbols = () => {
    return symbols[Math.floor(Math.random() * symbols.length)].toString()
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const generatePassword = (LetterLowerCase, LetterUpperCase, getSymbols, getNumber) =>{
    let password = ""
    const passwordlength = quantityInput.value 

    const generators = []

    if (lettersInput.checked){
        generators.push(LetterLowerCase, LetterUpperCase)
    }

    if (symbolsInput.checked){
        generators.push(getSymbols)
    }

    if (numbersInput.checked){
        generators.push(getNumber)
    }

    if (generators.length === 0){
        return;
    }

    for (i = 0; i < passwordlength; i = i + generators.length) {
        generators.forEach(()=>{
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()
            password += randomValue
        })
    }
    password = password.slice(0, passwordlength)
    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerText = password
}

//Events
openPasswordContainer.addEventListener("click", ()=>{
    passwordOptions.classList.toggle("hide");
})

generatePasswordButton.addEventListener("click", ()=>{
    generatePassword(LetterLowerCase, LetterUpperCase, getSymbols, getNumber)
})