// score
const playerScore = document.querySelector('#player');
playerScore.dataset.score = 1;
const robotScore = document.querySelector('#robot');
robotScore.dataset.score= 3;

// button player
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

// div robot for after playing event
const rockDiv = document.querySelector('#rock-fixe');
const paperDiv = document.querySelector('#paper-fixe');
const scissorDiv = document.querySelector('#scissor-fixe');


function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && comuputerSelection === "paper") || 
        (playerSelection === "paper" && comuputerSelection === "scissor") ||
        (playerSelection === "scissor" && comuputerSelection === "rock") ||
        (robotScore <= 5 || playerScore <= 5)) {
            // you lose
        }
    if (
        (playerSelection == "scissor" && comuputerSelection =="paper") ||
        (playerSelection == "rock" && comuputerSelection =="scissor") ||
        (playerSelection == "paper" && comuputerSelection =="rock") ||
        (robotScore <= 5 || playerScore <= 5)) {
            // you win 
        }

}
