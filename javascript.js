console.log("Hello world!");

let start = false;

const options = ["rock", "paper", "scissors"];
let answer;
let computerAnswer;

const playerChoice = () => {
  answer = prompt("Pick rock, paper, or scissors").toLowerCase();
  if (answer != "rock" && answer != "paper" && answer != "scissors") {
    console.log("Invalid prompt. Try again.");
    playerChoice();
  } else {
    console.log("Player choice: " + answer);
  }
  return;
};

const getComputerChoice = () => {
  computerAnswer = Math.floor(Math.random() * options.length);
  return console.log("Robot choice: " + options[computerAnswer]);
};

function battle() {
  if (
    (answer === "rock" && options[computerAnswer] === "scissors") ||
    (answer === "paper" && options[computerAnswer] === "rock") ||
    (answer === "scissors" && options[computerAnswer] === "paper")
  ) {
    return console.log("Congrats, you win!");
  } else if (
    (answer === "rock" && options[computerAnswer] === "paper") ||
    (answer === "paper" && options[computerAnswer] === "scissors") ||
    (answer === "scissors" && options[computerAnswer] === "rock")
  ) {
    return console.log("You lost :(");
  } else if (answer === options[computerAnswer]) {
    return console.log("It's a tie");
  } else {
    return console.log("Error, somethings not right.");
  }
}

playerChoice();
getComputerChoice();
battle();
