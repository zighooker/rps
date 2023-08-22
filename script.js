// Create necessary variables
let opponentSelection;
let opponentScore = 0;
let playerScore = 0;
let roundOver = false;

// getopponentChoice randomly determines strings rock, paper, or scissor
function getOpponentChoice() {
    let opponentChoiceInt = Math.floor(Math.random() * 3);
    switch (opponentChoiceInt) {
        case 0:
            return 'rock';
        case 1:
            return 'scissor';
        case 2:
            return 'paper';
    }
}

// playRound compares opponentSelection and playerSelection to determine winner
function playRound(playerSelection) {
    opponentSelection = getOpponentChoice();
    if (opponentSelection === playerSelection) {
        resultLogText.innerText += "Draw!\n";
    } else if (playerSelection === 'rock') {
        if (opponentSelection === 'scissor') {
            playerWin();            
        } else {
            opponentWin();
        }
    } else if (playerSelection === 'scissor') {
        if (opponentSelection === 'paper') {
            playerWin();
        } else {
            opponentWin();
        }
    } else {
        if (opponentSelection === 'rock') {
            playerWin();
        } else {
            opponentWin();
        }
    }
    checkEndGame();
}

function checkEndGame() {
    if (playerScore === 5) {
        resultLogText.innerText += "You win!\n";
        playerScoreBoard.classList.add("scoreWin");
        roundOver = true;
    } else if (opponentScore === 5) {
        resultLogText.innerText += "Sorry, you lose.\n";
        opponentScoreBoard.classList.add("scoreWin");
        roundOver = true;
    }
}

// functions to increment and display current score
function playerWin() {
    playerScore++;
    resultLogText.innerText += ("Opponent picked " + 
        opponentSelection + 
        ", player wins!\n");
    playerScoreValue.innerText = playerScore;
}

function opponentWin() {
    opponentScore++;
    resultLogText.innerText += ("Opponent picked " + 
        opponentSelection + 
        ", opponent wins.\n");
    opponentScoreValue.innerText = opponentScore;
}

function score() {
    return ("score is " + playerScore + " to " + opponentScore + ".");
}

// button click runs playRound with player choice
const buttons = document.querySelectorAll('.selectButton');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (roundOver === false) playRound(button.id);
    })
})

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    opponentScore = 0;
    playerScore = 0;
    resultLogText.innerText = "";
    playerScoreValue.innerText = 0;
    opponentScoreValue.innerText = 0;
    roundOver = false;
    playerScoreBoard.classList.remove("scoreWin");
    opponentScoreBoard.classList.remove("scoreWin");
})

const resultLogText = document.querySelector('#resultLogText');
const playerScoreValue = document.querySelector('#playerScoreValue');
const opponentScoreValue = document.querySelector('#opponentScoreValue');
const playerScoreBoard = document.querySelector('.playerScoreBoard');
const opponentScoreBoard = document.querySelector('.opponentScoreBoard');