class Game {
  constructor(options) {
    this._player1 = null;
    this._player2 = null;
    this._options = options;
  }

  _Init(player1, player2) {
    // console.log("_Init Game");
    this._player1 = player1;
    this._player2 = player2;
  }

  _CheckResults() {
    // console.log("Check Results");
    this._player2._RandomizeSign();
    if (this._player1._sign === "rock") {
      switch (this._player2._sign) {
        case "rock":
          this._ShowResult("draw");
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
          this._ShowResult("draw");
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
          this._ShowResult("draw");
          break;
      }
    }
  }

  _Reset() {
    // console.log("Reset");
    this._player1._points = 0;
    this._player2._points = 0;
    this._player1._sign = "rock";
    this._player2._sign = "rock";
  }

  _TryAgain() {
    // console.log("Try again");

    this._options.forEach((option) => {
      if (!option.classList.contains("hidden")) {
        option.classList.toggle("hidden");
      }
    });
  }

  _ShowResult(result) {
    // console.log("Show Result");

    // console.log(result);
    switch (result) {
      case "win":
        this._options[0].classList.remove("hidden");
        break;
      case "lose":
        this._options[1].classList.remove("hidden");
        break;
      case "draw":
        this._options[2].classList.remove("hidden");
        break;
    }
  }
}
