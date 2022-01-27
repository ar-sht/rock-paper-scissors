const PLAYS = Array("Rock", "Paper", "Scissors")

function computerPlay() {
    return PLAYS[Math.floor(Math.random()*3)]
}

function displayResult(message) {
    document.getElementById("results").innerHTML += message
    return
}

function resetGame() {
    document.getElementById("results").innerHTML = "Results Shown Here:"
    return
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Paper") {
            result = 10
        } else if (computerSelection === "Scissors"){
            result = 11
        } else {
            result = 12
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Paper") {
            result = 22
        } else if (computerSelection === "Scissors") {
            result = 20
        } else {
            result = 21
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            result = 31
        } else if (computerSelection === "Scissors") {
            result = 32
        } else {
            result = 30
        }
    }
    if (result % 10 === 0) {
        let message = `<br>You lose, ${computerSelection} beats ${playerSelection}!`
        displayResult(message)
    } else if (result % 10 === 1) {
        let message = `<br>You win, ${playerSelection} beats ${computerSelection}!`
        displayResult(message)
    } else {
        let message = `<br>It's a tie! The computer also picked ${computerSelection}`
        displayResult(message)
    }
}

function game() {
    let losses = 0
    let wins = 0
    let ties = 0
    document.getElementById("rock").onclick = function () { playRound('rock', computerPlay()) }
    document.getElementById("paper").onclick = function () { playRound('paper', computerPlay()) }
    document.getElementById("scissors").onclick = function () { playRound('scissors', computerPlay()) }
    document.getElementById("reset").onclick = function () { resetGame() }
}
game()
