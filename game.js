const PLAYS = Array("Rock", "Paper", "Scissors")

function computerPlay() {
    return PLAYS[Math.floor(Math.random()*3)]
}

function displayResult(message) {
    document.getElementById("results").innerHTML += message
    return
}

function displayRecord(wins, losses, ties) {
    document.getElementById("record").innerHTML = `${wins}-${losses}-${ties}`
}

function resetGame() {
    document.getElementById("results").innerHTML = "Results Shown Here:"
    return
}

function playRound(playerSelection, computerSelection, wins, losses, ties) {
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
        let message = `<br>Loss: The Computer picked ${computerSelection} which beats ${playerSelection}`
        displayResult(message)
    } else if (result % 10 === 1) {
        let message = `<br>Win: The computer picked ${computerSelection} which loses to ${playerSelection}!`
        displayResult(message)
    } else {
        let message = `<br>Tie: The Computer also picked ${computerSelection}`
        displayResult(message)
    }
}

function game() {
    document.getElementById("rock").onclick = function () { playRound('Rock', computerPlay()) }
    document.getElementById("paper").onclick = function () { playRound('Paper', computerPlay()) }
    document.getElementById("scissors").onclick = function () { playRound('Scissors', computerPlay()) }
    document.getElementById("reset").onclick = function () { resetGame() }
}
game()
