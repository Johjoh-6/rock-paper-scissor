// score
const playerScore = document.getElementById('player');
const robotScore = document.getElementById('robot');
// button player
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// div robot for after playing event
const rockDiv = document.getElementById('rock-fixe');
const paperDiv = document.getElementById('paper-fixe');
const scissorsDiv = document.getElementById('scissors-fixe');


// reset
const refreshButton = document.getElementById('refresh');
function reset() {
    playerScore.dataset.score = 0;
    robotScore.dataset.score = 0;
    removeShiny();
    refreshButton.classList.add('hiden');
}
reset();
// Limit score at 5
function endOfTheGame() {
    if (playerScore.dataset.score == 5 || robotScore.dataset.score == 5) {
        refreshButton.classList.remove('hiden');
        refreshButton.addEventListener('click', reset);
        return true;
    } 
}

// Selection player
rockButton.addEventListener("click", () => {
    removeShiny();
    if (endOfTheGame()) return;
    rockButton.classList.add('selected');
    play('rock');
})
paperButton.addEventListener("click", () => {
    removeShiny();
    if (endOfTheGame()) return;
    paperButton.classList.add('selected');
    play('paper');
})
scissorsButton.addEventListener("click", () => {
    removeShiny();
    if (endOfTheGame()) return;
    scissorsButton.classList.add('selected');
    play('scissors');

})



// Function for draw an random play from the bot
function botPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return 'rock';
    }
    if (number % 3 === 1) {
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
    } else if (
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (robotScore <= 5 || playerScore <= 5)) {
        return 1;
    } else {
        return 0;
    }

}




function play(playerSelection) {
    const computerSelection = botPlay();
    console.log(computerSelection);
    shinyBot(computerSelection);
    updateResult(
        playRound(playerSelection, computerSelection));
}

//result

function updateResult(result) {
    if (result == 0) return;
    else if (result == 1) {
        playerScore.dataset.score = +playerScore.dataset.score + 1;
    } else if (result == -1) {
        robotScore.dataset.score = +robotScore.dataset.score + 1;
    }
}
