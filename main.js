let app = null;
let player1;
let player2;
const actionBtns = [document.querySelector(".rock"), document.querySelector(".paper"), document.querySelector(".scissors")];
function init() {
  player1 = new Player();
  player2 = new Player();
  app = new Game();
  app._Init(player1, player2);
  actionBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      player1._ChooseSign(e.target.classList);
      app._CheckResults();
    })
  );
}
document.addEventListener("DOMContentLoaded", init);
