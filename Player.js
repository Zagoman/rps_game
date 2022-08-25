class Player {
  constructor(player1, player2) {
    this._points = 0;
    this._sign = "rock";
    this._Init();
  }

  _Init() {
    console.log("_Init Player");
  }

  _ChooseSign() {
    console.log("Choose Sign");
  }

  _PointIncrease() {
    console.log("Point increase");
    this._points++;
  }

  _RandomizeSign() {
    console.log("Randomize Sign");
  }
}
