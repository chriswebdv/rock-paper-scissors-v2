const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}
getComputerChoice();

const getHumanChoice = () => {
    while (true) {
        let answer = prompt().toLowerCase();

        if (answer === "rock" || answer === "paper" || answer === "scissors") {
            return answer;
        } else {
            continue;
        }
    }

}
console.log(getHumanChoice());