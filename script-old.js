// Initialize variables
let result;
let userThrow;
let computerThrow;
let userScore = 0;
let computerScore = 0;

function game ()

function userChoice() {
    // Get input from user (rock, paper, or scissors)
    let throw;
    throw = prompt("Would you like to throw rock, paper, or scissors?");
    throw = throw.toLocaleLowerCase();

    // Validate the user input
    if (throw !== "rock" || throw !== "paper" || throw !== "scissors"){
        console.log();
        return result = "You typed " + throw + ". That's not a valid throw; please double check your spelling and try again.";
    };

    // Return choice
    return throw;
};

function computerChoice () {
    // Use random number generator to generate number 0-2
    let throwNumber = Math.floor(Math.random() * 3);
    let throw;

    // Assign numbers to a value (rock, paper, or scissors)
    if (throwNumber === 0){
        throw = "rock";
    } else if (throwNumber === 1) {
        throw = "paper";
    } else {
        throw = "scissors";
    };

    // Return choice
    return throw;
};

// Find the winner
function playRound (userThrow, computerThrow) {
    if (computerThrow === userThrow) {
        result = "Tie game! You threw " + userThrow + " and the computer threw " + computerThrow + ". Better luck next time!";
    }
    else if (computerThrow === "rock" && userThrow === "scissors") {
        result = "The computer won. You threw " + userThrow + " and the computer threw " + computerThrow + ". Better luck next time!";
    }
    else if (computerThrow === "paper" && userThrow === "rock") {
        result = "The computer won. You threw " + userThrow + " and the computer threw " + computerThrow + ". Better luck next time!";
    }
    else if (computerThrow === "scissors" && userThrow === "paper") {
        result = "The computer won. You threw " + userThrow + " and the computer threw " + computerThrow + ". Better luck next time!";
    }
    else if (computerThrow === "rock" && userThrow === "paper") {
        result = "You won! You threw " + userThrow + " and the computer threw " + computerThrow + "!";
    }
    else if (computerThrow === "paper" && userThrow === "scissors") {
        result = "You won! You threw " + userThrow + " and the computer threw " + computerThrow + "!";
    }
    else if (computerThrow === "scissors" && userThrow === "rock") {
        result = "You won! You threw " + userThrow + " and the computer threw " + computerThrow + "!";
    };

    // Return the winner
    return result;
};