const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let totalGames = 0;

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

const getHumanChoice = () => {
    while (true) {
        let answer = prompt().toLowerCase().trim();

        if (answer === "rock" || answer === "paper" || answer === "scissors") {
            return answer;
        } else {
            continue;
        }
    }

}

const playGame = (humanChoice, computerChoice) => {
    while (totalGames <= 5) {
        humanChoice;
        if (humanChoice === "") {
            continue;
        }
        if (getHumanChoice() === "rock" && computerChoice === "paper") {
            console.log("Computer wins!");
            computerScore++;
            totalGames++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Human wins!");
            humanScore++;
            totalGames++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Human wins!");
            humanScore++;
            totalGames++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("Computer wins!");
            computerScore++;
            totalGames++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("tied game!");
            continue;
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("tied game!");
            continue;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Computer wins!");
            computerScore++;
            totalGames++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Human wins!");
            humanScore++;
            totalGames++;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("tied game!");
            continue;
        }
    }
    if (computerScore > humanScore) {
        console.log(`Computer won! you have a total of ${computerScore} points in ${totalGames} games!`);
    } else if (computerScore < humanScore) {
        console.log(`Human won! you have a total of ${humanScore} points in ${totalGames} games!`);
    } else {
        console.log("Tied game!");
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playGame(humanSelection, computerSelection);