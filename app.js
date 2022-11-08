const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')
const possibaleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibaleChoices.forEach(possibaleChoices => possibaleChoices.addEventListener('click', (e) => {    
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getRuslt()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoice.length
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getRuslt() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }

    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
    }

    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
    }

    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
    }

    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lost!'
    }

    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
    }

    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lost!'
    }
    resultdisplay.innerHTML = result
}
