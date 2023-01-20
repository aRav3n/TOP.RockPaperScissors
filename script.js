// Initialize variables
const possibleThrows = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice () {
    let throwNumber = Math.floor(Math.random() * possibleThrows.length);
    let throwWord = possibleThrows[throwNumber];
    return throwWord;
};

// Get player choice
function getPlayerChoice () {
    let throwWord = prompt('Would you like to throw rock, paper, or scissors?');
    // Convert player choice to lower case
    throwWord = throwWord.toLowerCase();

    // Validate player choice
    if (possibleThrows.includes(throwWord)) {
        return throwWord;
    } else {
        return throwWord + ' is not a legitimate choice. Please try again.';
    };
};

// Compare computerThrow vs playerThrow to determine the winner
function compareThrows (playerSelection, computerSelection) {
    // Evaluate for tie
    if (playerSelection === computerSelection){
        return 'Tie game!'
    }
    // Evaluate for computer win and update score
    else if (computerSelection === 'rock' && playerSelection === 'scissors' || 
            computerSelection === 'paper' && playerSelection === 'rock' ||
            computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        return 'You lose; ' + computerSelection + ' beats ' + playerSelection + '!';
    }
    // Evaluate for player win and update score
    else {
        playerScore++;
        return 'You win; ' + playerSelection + ' beats ' + computerSelection + '!'
    }
};

// Run 5 rounds of the game
