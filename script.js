// Initialize result variable

// Get input from user (rock, paper, or scissors)
let userThrow = prompt("Would you like to throw rock, paper, or scissors?");
userThrow = userThrow.toLocaleLowerCase();

// Validate the user input
if (userThrow !== "rock" || userThrow !== "paper" || userThrow !== "scissors"){
    console.log();
    result = "You typed " + userThrow + ". That's not a valid throw; please double check your spelling and try again.";
}

// Use random number generator to generate number 0-2
let computerThrow = Math.floor(Math.random() * 3);

// Assign numbers to a value (rock, paper, or scissors)
if (computerThrow === 0){
    computerThrow = "rock"
} else if (computerThrow === 1) {
    computerThrow = "paper"
} else {
    computerThrow = "scissors"
};

// Find the winner
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

// Output the winner
console.log(result);