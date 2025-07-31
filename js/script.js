//Elements
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")

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
    const passwordlength = 10

    const generators = [LetterLowerCase, LetterUpperCase, getSymbols, getNumber]

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
generatePasswordButton.addEventListener("click",()=>{
    generatePassword(LetterLowerCase, LetterUpperCase, getSymbols, getNumber)
})