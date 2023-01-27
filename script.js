// Initialize variables
const possibleThrows = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;

// Prep html items for use later
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const lastRoundResult = document.querySelector('#lastRoundResult');
const winningScore = 5;
const body = document.querySelector('body');

function capitalizeFirstLetter (word) {
    let firstChar = word.charAt(0).toUpperCase();
    let remainingLetters = word.substr(1);
    let capitalizedWord = firstChar + remainingLetters;
    return capitalizedWord;
};

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
        computerScore++; 
        return 'Lose';
    }
    // Evaluate for player win and update score
    else {
        playerScore++;
        return 'Win';
    };
};

// Play a round
function playOneRound(playerSelection) {
    const computerSelection = getComputerChoice ();
    let victoryStatement = 'Nice! ' + capitalizeFirstLetter(playerSelection) + ' beats ' + computerSelection + '!';
    let defeatStatement = 'Lost that one! ' + capitalizeFirstLetter(computerSelection) + ' beats ' + playerSelection + '!';
    let tieStatement = 'Tie! You both threw ' + computerSelection + '!';

    // If someone has already won reset the game before starting again
    if (playerScore >= 5 || computerScore >= 5){
        playerScore = 0;
        computerScore = 0;
        body.classList.remove('victory');
        body.classList.remove('defeat');
    };

    const result = compareThrows (playerSelection, computerSelection);

    if (playerScore >= 5) {
        lastRoundResult.textContent = 'You won the match! Well done!';
        body.classList.add('victory');
    } else if (computerScore >= 5) {
        lastRoundResult.textContent = 'You lost the match! Better luck next time!';
        body.classList.add('defeat');
    } else if (result === 'Win') {
        lastRoundResult.textContent = victoryStatement;
    } else if (result === 'Lose') {
        lastRoundResult.textContent = defeatStatement;
    } else {
        lastRoundResult.textContent = tieStatement;
    };

    playerScoreDisplay.textContent = playerScore + ' / ' + winningScore;
    computerScoreDisplay.textContent = computerScore + ' / ' + winningScore;
};

// Button clicks trigger a round
rockButton.addEventListener('click', function(){playOneRound('rock')});
paperButton.addEventListener('click', function(){playOneRound('paper')});
scissorsButton.addEventListener('click', function(){playOneRound('scissors')});