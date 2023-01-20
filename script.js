// Initialize variables
const possibleThrows = ['Rock','Paper','Scissors'];
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
    console.log('player throw: ' + playerSelection);
    console.log('computer throw: ' + computerSelection);

    // Update score for winner
    if (result === 'Win') {
        playerScore++;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    } else if (result === 'Lose') {
        computerScore++;
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
    } else {
        return 'Tie! You both threw ' + computerSelection + '!';
    };
};

// Play 5 rounds
