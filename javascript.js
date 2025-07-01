let start = false;

const options = ["rock", "paper", "scissors"];
let picked;
let answer;
let computerAnswer;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const button = document.querySelectorAll(".btn");
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    picked = btn.textContent.toLowerCase();
    playRound();
  });
});

const playerChoice = () => {
  return;
};

const computerChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function scoreCheck() {
  if (playerScore > computerScore) {
    console.log("YOU WON THE GAME!");
  } else if (playerScore < computerScore) {
    console.log("YOU LOST THE GAME:(");
  } else {
    console.log("IT'S A TIE!");
  }
  const answer = prompt("Do you wanna continue? y/n:");
  if (answer === "y") {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    console.clear();
    console.log("The game has started: ");
  }
  if (answer === "n") return;
}

function playRound() {
  computerAnswer = computerChoice(options);
  if (rounds === 0) console.log("Game Started:");
  if (rounds !== 5) {
    if (
      (picked === "scissors" && computerAnswer === "paper") ||
      (picked === "paper" && computerAnswer === "rock") ||
      (picked === "rock" && computerAnswer === "scissors")
    ) {
      console.log(picked);
      console.log("computer: " + computerAnswer);
      rounds++;
      playerScore++;
      console.log("You win!");
      if (rounds === 5) scoreCheck();
    } else if (
      (picked === "scissors" && computerAnswer === "rock") ||
      (picked === "paper" && computerAnswer === "scissors") ||
      (picked === "rock" && computerAnswer === "paper")
    ) {
      console.log(picked);
      console.log("computer: " + computerAnswer);
      rounds++;
      computerScore++;
      console.log("You loose:(");
      if (rounds === 5) scoreCheck();
    } else if (picked === computerAnswer) {
      console.log(picked);
      console.log("computer: " + computerAnswer);
      console.log("Its a tie");
      rounds++;
      if (rounds === 5) scoreCheck();
    }
  }
}
