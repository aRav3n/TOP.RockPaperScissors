// Initialize variables
const possibleThrows = ['Rock','Paper','Scissors'];
let playerScore = 0;
let computerScore = 0;
let victoryStatement = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
let defeatStatement = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
let tieStatement = 'Tie! You both threw ' + computerSelection + '!';

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
    throwWord = throwWord.charAt(0).toUpperCase() + throwWord.slice(1).toLowerCase();

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
        return 'Tie';
    }
    // Evaluate for computer win and update score
    else if (computerSelection === 'Rock' && playerSelection === 'Scissors' || 
            computerSelection === 'Paper' && playerSelection === 'Rock' ||
            computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'Lose';
    }
    // Evaluate for player win and update score
    else {
        return 'Win';
    };
};

// Play a round
function playOneRound () {
    const computerSelection = getComputerChoice ();
    const playerSelection = getPlayerChoice ();
    const result = compareThrows (playerSelection, computerSelection);
    // Update score for winner
    if (result === 'Win') {
        playerScore++;
        return victoryStatement;
    } else if (result === 'Lose') {
        computerScore++;
        return defeatStatement;
    } else {
        return tieStatement;
    };
};

// Play 5 rounds
function game () {
    // Verify that both scores are 0
    playerScore = 0;
    computerScore = 0;

    // Run 5 games
    for (let i = 0; i < 5; i++) {
        playOneRound ();
    };

    // Compare scores and return the winner
    if (playerScore > computerScore){
        return 'You won the match! Well done!';
    } else if (computerScore > playerScore) {
        return 'You lost the match! Better luck next time!'
    } else {
        return 'It\'s a tie! Try again!'
    };
};