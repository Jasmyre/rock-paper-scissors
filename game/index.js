const search = window.location.search;
const queries = new URLSearchParams(search);

const player1 = queries.get("player1");
const player2 = queries.get("player2");
