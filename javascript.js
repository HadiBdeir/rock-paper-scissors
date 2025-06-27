let start = false;

const options = ["rock", "paper", "scissors"];
let answer;
let computerAnswer;
let yourScore = 0;
let computerScore = 0;
let result;

const askToPlay = () => {
  let playAgain = prompt("Do you want to play? y or n!");
  if (playAgain.toLowerCase() === "y" || playAgain.toLowerCase() === "yes") {
    return playerChoice();
  } else if (playAgain.toLowerCase() === "n" || playAgain.toLowerCase() === "no") {
    console.log("I guess you dont want to :(");
    return;
  } else {
    prompt("Unknown value, please type again.");
    return askToPlay();
  }
};

const playerChoice = () => {
  answer = prompt("Pick rock, paper, or scissors").toLowerCase();
  if (answer != "rock" && answer != "paper" && answer != "scissors") {
    console.log("Invalid prompt. Try again.");
    playerChoice();
  } else {
    console.log("Player choice: " + answer);
  }
  return getComputerChoice();
};

const getComputerChoice = () => {
  computerAnswer = Math.floor(Math.random() * options.length);
  console.log("Robot choice: " + options[computerAnswer]);
  return battle();
};

function battle() {
  if (
    (answer === "rock" && options[computerAnswer] === "scissors") ||
    (answer === "paper" && options[computerAnswer] === "rock") ||
    (answer === "scissors" && options[computerAnswer] === "paper")
  ) {
    yourScore++;
    let result = console.log("Congrats, you win!");
  } else if (
    (answer === "rock" && options[computerAnswer] === "paper") ||
    (answer === "paper" && options[computerAnswer] === "scissors") ||
    (answer === "scissors" && options[computerAnswer] === "rock")
  ) {
    computerScore++;
    let result = console.log("You lost :(");
  } else if (answer === options[computerAnswer]) {
    let result = console.log("It's a tie");
  } else {
    let result = console.log("Error, somethings not right.");
  }
  console.log(
    `Your score is: ${yourScore}, the opponents score is: ${computerScore}`
  );
  askToPlay();
  return result;
}

askToPlay();
