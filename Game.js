class Game {
  constructor() {
    this._player1 = null;
    this._player2 = null;
  }

  _Init(player1, player2) {
    console.log("_Init Game");
    this._player1 = player1;
    this._player2 = player2;
  }

  _CheckResults() {
    console.log("Check Results");
    this._player2._RandomizeSign();
    if (this._player1._sign === "rock") {
      switch (this._player2._sign) {
        case "rock":
          this._ShowResult("tie");
          break;
        case "paper":
          this._ShowResult("lose");
          this._player2._PointIncrease();
          break;
        case "scissors":
          this._ShowResult("win");
          this._player1._PointIncrease();
          break;
      }
    } else if (this._player1._sign === "paper") {
      switch (this._player2._sign) {
        case "rock":
          this._ShowResult("win");
          this._player1._PointIncrease();
          break;
        case "paper":
          this._ShowResult("tie");
          break;
        case "scissors":
          this._ShowResult("lose");
          this._player2._PointIncrease();
          break;
      }
    } else {
      switch (this._player2._sign) {
        case "rock":
          this._ShowResult("lose");
          this._player2._PointIncrease();
          break;
        case "paper":
          this._ShowResult("win");
          this._player1._PointIncrease();
          break;
        case "scissors":
          this._ShowResult("tie");
          break;
      }
    }
  }

  _Reset() {
    console.log("Reset");
    this._player1._points = 0;
    this._player2._points = 0;
    this._player1._sign = "rock";
    this._player2._sign = "rock";
  }

  _TryAgain() {
    console.log("Try again");
  }

  _ShowResult(result) {
    console.log("Show Result");
    console.log(result);
    switch (result) {
      case "win":
        break;
      case "lose":
        break;
      case "tie":
        break;
    }
  }
}
