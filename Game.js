class Game {
  constructor(player1, player2) {
    this._player1 = player1;
    this._player2 = player2;
    this._Init();
  }

  _Init() {
    console.log("_Init Game");
  }

  _CheckResults() {
    console.log("Check Results");
  }

  _Reset() {
    console.log("Reset");
    this._player1._points = 0;
    this._player2._points = 0;
    this._player1._sign = "rock";
    this._player2._sign = "rock";
  }
  _ShowResult() {
    console.log("Show Result");
  }
}
