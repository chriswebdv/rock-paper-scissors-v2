// create variable which includes the computers choices
const choices = ["rock", "paper", "scissors"];

// create the variables to keep track of the scores and total games
let humanScore = 0;
let computerScore = 0;
let totalGames = 0;

// function that returns a random computer choice from the array
const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// create the human answer and equal to null to avoid tolowercase and trim methods errors
let answer = null;

if (answer !== null) {
  answer = answer.toLowerCase().trim(); 
}

// Loops which contains all of the games and logic 
while (answer !== "") {
    console.log("what is your choice: ROCK, PAPER or SCISSORS? ");
    answer = prompt();

    if (answer === "rock" && getComputerChoice() === "paper") {
        //console.log("Computer wins!");
        computerScore++;
        totalGames++;
    } else if (answer === "rock" && getComputerChoice() === "scissors") {
        //console.log("Human wins!");
        humanScore++;
        totalGames++;
    } else if (answer === "paper" && getComputerChoice() === "rock") {
        //console.log("Human wins!");
        humanScore++;
        totalGames++;
    } else if (answer === "paper" && getComputerChoice() === "scissors") {
        //console.log("Computer wins!");
        computerScore++;
        totalGames++;
    } else if (answer === "paper" && getComputerChoice() === "paper") {
        //console.log("tied game!");
        totalGames++;
    } else if (answer === "scissors" && getComputerChoice() === "scissors") {
        //console.log("tied game!");
        totalGames++;
    } else if (answer === "scissors" && getComputerChoice() === "rock") {
        //console.log("Computer wins!");
        computerScore++;
        totalGames++;
    } else if (answer === "scissors" && getComputerChoice() === "paper") {
        //console.log("Human wins!");
        humanScore++;
        totalGames++;
    } else if (answer === "rock" && getComputerChoice() === "rock") {
        //console.log("tied game!");
        totalGames++;
    }
}

// conditional to check who the winner is
if (computerScore > humanScore) {
    console.log(`Computer won! with a total of ${computerScore} points in ${totalGames} games!`);
} else if (computerScore < humanScore) {
    console.log(`Human won! you have a total of ${humanScore} points in ${totalGames} games!`);
} else {
    console.log("Tied game!");
}
