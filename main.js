// score
const playerScore = document.querySelector('#player');
playerScore.dataset.score = 0;
const robotScore = document.querySelector('#robot');
robotScore.dataset.score= 0;

// Limit score at 5
const newGame = document.createElement('div');
while (playerScore.dataset.score === 5 || robotScore.dataset.score === 5) {
    newGame.textContent = `Play again`
    disable();
}

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
        return 'scissors';
    }
}

//function for shiny div of the robot
function shinyBot(computerSelection) {
    switch (computerSelection) {
        case 'rock':
        rockDiv.classList.add('selected');
        break;
    case 'paper': 
        paperDiv.classList.add('selected');
        break;
    case 'scissors':
        scissorsDiv.classList.add('selected');
        break;
    }
}



 //clear the style
function removeShiny() {
    rockDiv.classList.remove('selected');
    paperDiv.classList.remove('selected');
    scissorsDiv.classList.remove('selected');
    rockButton.classList.remove('selected');
    paperButton.classList.remove('selected');
    scissorsButton.classList.remove('selected');
}


function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (robotScore <= 5 || playerScore <= 5)) {
           return -1;
        }
    else if (
        (playerSelection == "scissors" && computerSelection =="paper") ||
        (playerSelection == "rock" && computerSelection =="scissors") ||
        (playerSelection == "paper" && computerSelection =="rock") ||
        (robotScore <= 5 || playerScore <= 5)) {
           return 1;
        }
        else {
            return 0;
        }

}

// Selection player
rockButton.addEventListener("click", ()=> {
    removeShiny();
    rockButton.classList.add('selected');

    play('rock');
})
paperButton.addEventListener("click", ()=> {
    removeShiny();
    paperButton.classList.add('selected');
    play('paper');
})
scissorsButton.addEventListener("click", ()=> {
    removeShiny();
    scissorsButton.classList.add('selected');
    play('scissors');
})




function play(playerSelection) {
    const computerSelection = botPlay();
    console.log(computerSelection);
    shinyBot(computerSelection);
  const result = playRound(playerSelection, computerSelection);
  updateResult(result);
}

//result

function updateResult(result){
    if (result ==0) return;
    else if (result == 1){
       playerScore.dataset.score = Number( playerScore.dataset.score) + 1;
  }
    else if (result == -1){
        robotScore.dataset.score = Number(robotScore.dataset.score) + 1;  
  }
}

