const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("btn")
let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")


function randomClassic(){
    return characters[Math.floor(Math.random()*characters.length)]
}

generateBtn.addEventListener("click", function(){
    result1.textContent=""
    result2.textContent=""
    let passwordLength = document.getElementById("passwordLength").value
    for(let i=0; i<passwordLength;i++){
        result1.textContent+=randomClassic()
        result2.textContent+=randomClassic()
    }
})

result1.addEventListener("click", (event) => {
    let content = result1.textContent
    navigator.clipboard.writeText(content)
})

result2.addEventListener("click", (event) => {
    let content = result2.textContent
    navigator.clipboard.writeText(content)
})