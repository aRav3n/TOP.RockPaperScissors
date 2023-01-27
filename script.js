// Initialize variables
const possibleThrows = ['rock','paper','scissors'];
let playerScore = 0;

// Prep html items for use later
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#playerScore');

// Get computer choice
function getComputerChoice () {
    let throwNumber = Math.floor(Math.random() * possibleThrows.length);
    let throwWord = possibleThrows[throwNumber];
    return throwWord;
};

// Compare computerThrow vs playerThrow to determine the winner
function compareThrows (playerSelection, computerSelection) {
    // Evaluate for tie
    if (playerSelection === computerSelection){
        return 'Tie';
    }
    // Evaluate for computer win and update score
    else if (computerSelection === 'rock' && playerSelection === 'scissors' || 
            computerSelection === 'paper' && playerSelection === 'rock' ||
            computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'Lose';
    }
    // Evaluate for player win and update score
    else {
        return 'Win';
    };
};

// Play a round
function playOneRound(playerSelection) {
    const computerSelection = getComputerChoice ();
    const result = compareThrows (playerSelection, computerSelection);
    let victoryStatement = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    let defeatStatement = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
    let tieStatement = 'Tie! You both threw ' + computerSelection + '!';

    // Update score
    if (result === 'Win') {
        playerScore++;
    };
    playerScoreDisplay.textContent = playerScore;
};

// Button clicks trigger a round
rockButton.addEventListener('click', function(){playOneRound('rock')});
paperButton.addEventListener('click', function(){playOneRound('paper')});
scissorsButton.addEventListener('click', function(){playOneRound('scissors')});