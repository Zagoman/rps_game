let app = null;
let player1;
let player2;

document.addEventListener("DOMContentLoaded", () => {
  player1 = new Player();
  player2 = new Player();
  app = new Game(player1, player2);
});
