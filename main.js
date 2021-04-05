// score
const playerScore = document.querySelector('#player');
playerScore.dataset.score = 1;
const robotScore = document.querySelector('#robot');
robotScore.dataset.score= 5;


// button player
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// div robot for after playing event
const rockDiv = document.querySelector('#rock-fixe');
const paperDiv = document.querySelector('#paper-fixe');
const scissorsDiv = document.querySelector('#scissors-fixe');

// game selector
// const playerSelection = a;
const computerSelection = botPlay();

// Function for draw an random play from the bot
function botPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return 'rock';
    } if (number % 3 === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//function for shiny div of the robot
function shinyBot(computerSelection) {
    switch (computerSelection) {
        case 'rock':
        removeShinyBot(computerSelection);
        rockDiv.classList.add('selected');
        break;
    case 'paper': 
        removeShinyBot(computerSelection);
        paperDiv.classList.add('selected');
        break;
    case 'scisssor':
        removeShinyBot(computerSelection);
        scissorsDiv.classList.add('selected');
        break;
    }
}
 //clear the style
function removeShinyBot(computerSelection) {
    rockDiv.classList.remove('selected');
    paperDiv.classList.remove('selected');
    scissorsDiv.classList.remove('selected');
}


function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (robotScore <= 5 || playerScore <= 5)) {
            // you lose
        }
    if (
        (playerSelection == "scissors" && computerSelection =="paper") ||
        (playerSelection == "rock" && computerSelection =="scissors") ||
        (playerSelection == "paper" && computerSelection =="rock") ||
        (robotScore <= 5 || playerScore <= 5)) {
            // you win 
        }

}

// Player 


console.log(computerSelection);