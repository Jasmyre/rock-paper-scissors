const { log } = console;

const rockSrc = "../assets/v1rock.svg";
const paperSrc = "../assets/v1paper.svg";
const scissorsSrc = "../assets/v1scissors.svg";

const button = document.querySelectorAll(".button");

const playerHand = document.getElementById("player-hand");
const robotHand = document.getElementById("robot-hand");

const playerScore = document.getElementById("player-score");
const robotScore = document.getElementById("robot-score");
const round = document.getElementById("round");

const search = window.location.search;
const queries = new URLSearchParams(search);

const player1 = queries.get("player1");
const player2 = queries.get("player2");

const choices = ["rock", "paper", "scissors"];
const CHOICES = [
  {
    name: "rock",
    src: "../assets/v1rock.svg",
  },
  {
    name: "paper",
    src: "../assets/v1paper.svg",
  },
  {
    name: "scissors",
    src: "../assets/v1scissors.svg",
  },
];

let playerScoreNum = 0;
let robotScoreNum = 0;
let roundNum = 1;
let playerWon = false;

const updateRound = () => {
  playerScore.textContent = `SCORE: ${playerScoreNum}`;
  robotScore.textContent = `SCORE: ${robotScoreNum}`;
  round.textContent = `ROUND: ${roundNum}`;
};

updateRound();

const rock = (e) => {
  console.log("rock");

  const randomChoice = Math.floor(Math.random() * 3);
  const robotChoice = CHOICES[randomChoice];

  const playerSelection = e.target.id;
  const computerSelection = robotChoice.name;

  const playerChoice = `Player: ${playerSelection}`;
  const computerChoice = `Computer: ${computerSelection}`;

  log(playerChoice);
  log(computerChoice);

  playerHand.src = rockSrc;
  robotHand.src = rockSrc;

  playerHand.classList.add("toss");
  robotHand.classList.add("toss");

  button.disabled = true;

  setTimeout(() => {
    playerHand.src = rockSrc;
    robotHand.src = robotChoice.src;

    playerHand.classList.remove("toss");
    robotHand.classList.remove("toss");

    if (playerSelection === computerSelection) {
      const result = "It's a tie!";
      log(result);
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      const result = "You win!";
      playerScoreNum++;
      log(result);
    } else {
      const result = "You lose.";
      robotScoreNum++;
      log(result);
    }

    roundNum++;
    updateRound();
  }, 1400);
};

const paper = (e) => {
  console.log("rock");

  const randomChoice = Math.floor(Math.random() * 3);
  const robotChoice = CHOICES[randomChoice];

  const playerSelection = e.target.id;
  const computerSelection = robotChoice.name;

  const playerChoice = `Player: ${playerSelection}`;
  const computerChoice = `Computer: ${computerSelection}`;

  log(playerChoice);
  log(computerChoice);

  playerHand.src = rockSrc;
  robotHand.src = rockSrc;

  playerHand.classList.add("toss");
  robotHand.classList.add("toss");

  setTimeout(() => {
    playerHand.src = paperSrc;
    robotHand.src = robotChoice.src;

    playerHand.classList.remove("toss");
    robotHand.classList.remove("toss");

    if (playerSelection === computerSelection) {
      const result = "It's a tie!";
      log(result);
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      const result = "You win!";
      playerScoreNum++;
      log(result);
    } else {
      const result = "You lose.";
      robotScoreNum++;
      log(result);
    }

    roundNum++;
    updateRound();
  }, 1400);
};

const scissors = (e) => {
  console.log("rock");

  const randomChoice = Math.floor(Math.random() * 3);
  const robotChoice = CHOICES[randomChoice];

  const playerSelection = e.target.id;
  const computerSelection = robotChoice.name;

  const playerChoice = `Player: ${playerSelection}`;
  const computerChoice = `Computer: ${computerSelection}`;

  log(playerChoice);
  log(computerChoice);

  playerHand.src = rockSrc;
  robotHand.src = rockSrc;

  playerHand.classList.add("toss");
  robotHand.classList.add("toss");

  setTimeout(() => {
    playerHand.src = scissorsSrc;
    robotHand.src = robotChoice.src;

    playerHand.classList.remove("toss");
    robotHand.classList.remove("toss");

    if (playerSelection === computerSelection) {
      const result = "It's a tie!";
      log(result);
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      const result = "You win!";
      playerScoreNum++;
      log(result);
    } else {
      const result = "You lose.";
      robotScoreNum++;
      log(result);
    }

    roundNum++;
    updateRound();
  }, 1400);
};

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         const playerSelection = e.target.id;
//         const computerSelection = choices[Math.floor(Math.random() * 3)];

//         playerChoice.textContent = `Player: ${playerSelection}`;
//         computerChoice.textContent = `Computer: ${computerSelection}`;

//         if (playerSelection === computerSelection) {
//             result.textContent = "It's a tie!";
//         } else if (
//             (playerSelection === 'rock' && computerSelection === 'scissors') ||
//             (playerSelection === 'paper' && computerSelection === 'rock') ||
//             (playerSelection === 'scissors' && computerSelection === 'paper')
//         ) {
//             result.textContent = "You win!";
//         } else {
//             result.textContent = "You lose.";
//         }
//     });
// });
