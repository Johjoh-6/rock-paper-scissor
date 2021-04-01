// score
const playerScore = document.querySelector('#player');
playerScore.dataset.score = 1;
const robotScore = document.querySelector('#robot');
robotScore.dataset.score= 3;

// button player
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// div robot for after playing event
const rockDiv = document.querySelector('#rock-fixe');
const paperDiv = document.querySelector('#paper-fixe');
const scissorsDiv = document.querySelector('#scissors-fixe');

// Function for draw an random play from the bot
function botPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return 'rock';
    } if (number % 3 === 1) {
        return 'paper';
    } else {
            return 'scissor';
    }
}
console.log(botPlay());
//function for shiny div of the robot
function shinyBot(botSelection) {
    if (botSelection === 'rock') {
        rockDiv.classList.add('selected');
    } if (botSelection === 'paper') {
        paperDiv.classList.add('selected');
    } if (botSelection === 'scisssor') {
        scissorsDiv.classList.add('selected');
    }
}
 //clear the style
function removeShinyBot(botSelection) {
    rockDiv.classList.remove('selected');
    paperDiv.classList.remove('selected');
    scissorsDiv.classList.remove('selected');
}


// function playRound(playerSelection, computerSelection) {
//     if (
//         (playerSelection === "rock" && comuputerSelection === "paper") || 
//         (playerSelection === "paper" && comuputerSelection === "scissor") ||
//         (playerSelection === "scissor" && comuputerSelection === "rock") ||
//         (robotScore <= 5 || playerScore <= 5)) {
//             // you lose
//         }
//     if (
//         (playerSelection == "scissor" && comuputerSelection =="paper") ||
//         (playerSelection == "rock" && comuputerSelection =="scissor") ||
//         (playerSelection == "paper" && comuputerSelection =="rock") ||
//         (robotScore <= 5 || playerScore <= 5)) {
//             // you win 
//         }

// }
