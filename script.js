// Create necessary variables
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

// getComputerChoice randomly determines strings rock, paper, or scissor
function getComputerChoice() {
    let compChoiceInt = Math.floor(Math.random() * 3);
    switch (compChoiceInt) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'scissor';
            break;
        case 2:
            computerSelection = 'paper';
            break;
    }
    // console.log("getComputerChoice " + computerSelection);
}

// getPlayerChoice prompts user, equalizes output and checks for validity
function getPlayerChoice() {
    playerSelection = (prompt("Rock, paper, or scissor?")).toLowerCase();
    if (playerSelection !== 'rock'
        && playerSelection !== 'paper'
        && playerSelection !== 'scissor') {
            alert("Invalid input, please try again.");
            getPlayerChoice();
    }
}

// playRound compares computerSelection and playerSelection to determine winner
function playRound() {
    getComputerChoice();
    getPlayerChoice();
    if (computerSelection === playerSelection) {
        console.log("Draw!");
        playRound();
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            playerWin();            
        } else {
            computerWin();
        }
    } else if (playerSelection === 'scissor') {
        if (computerSelection === 'paper') {
            playerWin();
        } else {
            computerWin();
        }
    } else {
        if (computerSelection === 'rock') {
            playerWin();
        } else {
            computerWin();
        }
    }
}

// functions to increment and display current score
function playerWin() {
    playerScore++;
    console.log("Computer picked " + computerSelection + ", Player wins! Current " + score());
}

function computerWin() {
    computerScore++;
    console.log("Computer picked " + computerSelection + ", Computer wins! Current " + score());
}

function score() {
    return ("score is " + playerScore + " to " + computerScore + ".");
}

// game runs a sequence of 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("You win! Final " + score());
    } else {
        console.log("Sorry, you lose. Final " + score());
    }
}

game();