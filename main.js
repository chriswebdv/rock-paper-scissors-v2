const choices = ["rock", "paper", "scissors"];

const computerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}
console.log(computerChoice()); 