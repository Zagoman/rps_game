let app = null;
let player1;
let player2;
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");
const options = [win, lose, draw];
const actionBtns = [document.querySelector(".rock"), document.querySelector(".paper"), document.querySelector(".scissors")];
const iconPlayer1 = document.querySelector("#player1");
const iconPlayer2 = document.querySelector("#player2");
function init() {
  player1 = new Player(iconPlayer1);
  player2 = new Player(iconPlayer2);
  app = new Game(options);
  app._Init(player1, player2);
  actionBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      app._TryAgain();
      player1._ChooseSign(e.target.classList);
      app._CheckResults();
    })
  );
}
document.addEventListener("DOMContentLoaded", init);
