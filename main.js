const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let totalGames = 0;

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

let answer = null;

if (answer !== null) {
  answer = answer.toLowerCase().trim(); 
}

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

if (computerScore > humanScore) {
    console.log(`Computer won! with a total of ${computerScore} points in ${totalGames} games!`);
} else if (computerScore < humanScore) {
    console.log(`Human won! you have a total of ${humanScore} points in ${totalGames} games!`);
} else {
    console.log("Tied game!");
}
