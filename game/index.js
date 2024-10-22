const {log} = console;

const search = window.location.search;
const queries = new URLSearchParams(search);

const player1 = queries.get("player1");
const player2 = queries.get("player2");

const choices = ['rock', 'paper', 'scissors'];

const rockSrc = "../assets/v1rock.svg";
const paperSrc = "../assets/v1paper.svg";
const scissorsSrc = "../assets/v1scissors.svg";

const playerHand = document.getElementById("player-hand")

const rock = (e) => {
    console.log("rock")

    const playerSelection = e.target.id;
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    const playerChoice = `Player: ${playerSelection}`;
    const computerChoice = `Computer: ${computerSelection}`;

    log(playerChoice);
    log(computerChoice);

    playerHand.classList.add("toss");

    setTimeout(() => {
        playerHand.src = rockSrc;
        log(playerHand.src)
        playerHand.classList.remove("toss")
    }, 1500)
    
    if (playerSelection === computerSelection) {
        const result = "It's a tie!";
        log(result);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        const result  = "You win!";
        log(result);
    } else {
        const result = "You lose.";
        log(result);
    }
}

const scissors = (e) => {
    console.log("rock")

    const playerSelection = e.target.id;
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    const playerChoice = `Player: ${playerSelection}`;
    const computerChoice = `Computer: ${computerSelection}`;

    log(playerChoice);
    log(computerChoice);

    playerHand.classList.add("toss");

    setTimeout(() => {
        playerHand.src = scissorsSrc;
        log(playerHand.src)
        playerHand.classList.remove("toss")
    }, 1500)
    
    if (playerSelection === computerSelection) {
        const result = "It's a tie!";
        log(result);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        const result  = "You win!";
        log(result);
    } else {
        const result = "You lose.";
        log(result);
    }
}

const paper = (e) => {
    console.log("rock")

    const playerSelection = e.target.id;
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    const playerChoice = `Player: ${playerSelection}`;
    const computerChoice = `Computer: ${computerSelection}`;

    log(playerChoice);
    log(computerChoice);

    playerHand.classList.add("toss");

    setTimeout(() => {
        playerHand.src = paperSrc;
        log(playerHand.src)
        playerHand.classList.remove("toss")
    }, 1500)
    
    if (playerSelection === computerSelection) {
        const result = "It's a tie!";
        log(result);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        const result  = "You win!";
        log(result);
    } else {
        const result = "You lose.";
        log(result);
    }
}

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