const moves = {
    0: "Paper",
    1: "Scissors",
    2: "Rock"
}

function computerPlay() {
    return Math.floor(Math.random()*3)
}

document.getElementById("rock").addEventListener('click', function () {
    playRound(2, computerPlay())
})
document.getElementById("scissors").addEventListener('click', function () {
    playRound(1, computerPlay())
})
document.getElementById("paper").addEventListener('click', function () {
    playRound(0, computerPlay())
})


let playerWins = 0
let computerWins = 0

function playRound(playerSelection, computerSelection) {
    if ((playerSelection > computerSelection && playerSelection !== computerSelection + 2) || playerSelection === computerSelection - 2) {
        result = `You win! ${moves[playerSelection]} beats ${moves[computerSelection]}.`
        playerWins++
    } else if ((computerSelection > playerSelection && computerSelection !== playerSelection + 2) || computerSelection === playerSelection - 2) {
        result = `You lose, ${moves[computerSelection]} beats ${moves[playerSelection]}.`
        computerWins++
    } else {
        result = `It's a tie, the computer also picked ${moves[computerSelection]}`
    }
    document.getElementById("results").innerHTML += `<p>${result}</p>`
    document.getElementById("score").innerHTML = playerWins + '-' + computerWins
    if (playerWins === 5) {
        document.getElementById("results").innerHTML += `<p>Good job, you won!</p>`
        document.getElementById("rock").remove()
        document.getElementById("scissors").remove()
        document.getElementById("paper").remove()
    } else if(computerWins === 5) {
        document.getElementById("results").innerHTML += `<p>You lost, better luck next time.</p>`
        document.getElementById("rock").remove()
        document.getElementById("scissors").remove()
        document.getElementById("paper").remove()
    }
}
