const { log } = console;

const search = window.location.search;
const queries = new URLSearchParams(search);

const playerWonQuerry = (queries.get("playerWon")) ? queries.get("playerWon") : null;
const playerWon = (playerWonQuerry) ? ((playerWonQuerry == "true") ? true : false) : null;

const banner = document.getElementById("winner-banner");

const winnerTemplate = `<div class="winner-section-wrapper section-lg">
					<h1>YOU WON!</h1>
					<a href="../game/index.html">Play Again</a>
				</div>`;
const loserTemplate = `<div class="winner-section-wrapper section-lg">
					<h1>YOU Lose.</h1>
					<a href="../game/index.html">Play Again</a>
				</div>`;

banner.innerHTML = (playerWon == true) ? winnerTemplate : "";
banner.innerHTML = (playerWon == false) ? loserTemplate : "";