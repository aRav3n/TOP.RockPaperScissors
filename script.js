// Get input from user (rock, paper, or scissors)
let userThrow = prompt("Would you like to throw rock, paper, or scissors?");
userThrow = userThrow.toLocaleLowerCase();

// Validate the user input
if (userThrow !== "rock" || userThrow !== "paper" || userThrow !== "scissors"){
    console.log("That's not a valid throw; please double check your spelling and try again.");
    return;
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

// Initialize variable for who won
let result = "You won!";

// Compare throws
if (computerThrow === userThrow) {
    result = "Tie game!";
}
else if (computerThrow === "rock" && userThrow === "scissors") {
    result = "The computer won. Better luck next time!"
}
else if (computerThrow === "paper" && userThrow === "rock") {
    result = "The computer won. Better luck next time!"
}
else if (computerThrow === "scissors" && userThrow === "paper") {
    result = "The computer won. Better luck next time!"
};

// Output the winner
console.log(result + " You threw " + userThrow + " and the computer threw " + computerThrow + "!");
return result;