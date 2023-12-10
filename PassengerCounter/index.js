let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count++
    countEl.innerText = count
}

function save(){
    saveEl.innerText += count + " - "
    count = 0
    countEl.innerText = 0
}

function reset(){
    saveEl.innerText = "Previous entries :"
}
