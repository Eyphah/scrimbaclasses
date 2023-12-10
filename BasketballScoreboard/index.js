let homeScore = document.getElementById("home-nb")
let guestScore = document.getElementById("guest-nb")
let homeCount = 0
let guestCount = 0

function reset(){
    homeCount = 0
    homeScore.innerText = homeCount
    guestCount = 0
    guestScore.innerText = guestCount
}

function add1Home(){
    homeCount++
    homeScore.innerText = homeCount
}

function add1Guest(){
    guestCount++
    guestScore.innerText = guestCount
}

function add2Home(){
    homeCount += 2
    homeScore.innerText = homeCount
}

function add2Guest(){
    guestCount += 2
    guestScore.innerText = guestCount
}

function add3Home(){
    homeCount += 3
    homeScore.innerText = homeCount
}

function add3Guest(){
    guestCount += 3
    guestScore.innerText = guestCount
}