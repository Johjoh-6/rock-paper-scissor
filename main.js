// score
const playerScore = document.querySelector('#player');
playerScore.dataset.score = 1;
const robotScore = document.querySelector('#robot');
robotScore.dataset.score= 3;

// button
// const rock

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && comuputerSelection =="paper"){
        return "You Lose! Paper beats Rock";
    } if (playerSelection == "paper" && comuputerSelection =="scissor"){
        return "You Lose! Scissor beats Paper";
    } if (playerSelection == "scissor" && comuputerSelection =="rock"){
        return "You Lose! Rock beats Scissor";
    } 
    if (playerSelection == "scissor" && comuputerSelection =="paper"){
        return "You win!  Scissor beats Paper";
}if (playerSelection == "rock" && comuputerSelection =="scissor"){
    return "You win! Rock beats Scissor";
} if (playerSelection == "paper" && comuputerSelection =="rock"){
    return "You win! Paper beats Rock";
} 
}
const playerSelection = document.querySelector(button);
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));