// Create necessary variables
let computerSelection;
let playerSelection;
let roundResult;

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
        default:
            console.log("Computer selection error");
    }
}

// getPlayerChoice prompts user, equalizes output and checks for validity
function getPlayerChoice() {
    playerSelection = (prompt("Rock, paper, or scissor?")).toLowerCase();
    if (playerSelection != 'rock'
        || playerSelection != 'paper'
        || playerSelection != 'scissor') {
            alert("Invalid input, please try again.");
            getPlayerChoice();
    }
}

// playRound compares computerSelection and playerSelection to determine winner
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        roundResult = 'draw';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            roundResult = 'player win';            
        } else {
            roundResult = 'computer win';
        }
    } else if (playerSelection === 'scissor') {
        if (computerSelection === 'paper') {
            roundResult = 'player win';
        } else {
            roundResult = 'computer win';
        }
    } else {
        if (computerSelection === 'rock') {
            roundResult = 'player win';
        } else {
            roundResult = 'computer win';
        }
    }

}

// game runs a sequence of rounds and keeps score
function game() {

}