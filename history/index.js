const { log } = console;

const search = window.location.search;
const queries = new URLSearchParams(search);

const playerWonQuerry = queries.get("playerWon");
const playerWon = (playerWonQuerry == "true") ? true : false;

const banner = document.getElementById("winner-banner-text");

banner.innerText = (playerWon == true) ? "You Won!" : "You Lose.";