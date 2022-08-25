class Player {
  constructor() {
    this._points = 0;
    this._sign = "rock";
  }

  _ChooseSign(e) {
    if (e.contains("rock")) {
      console.log("rock");
      this._sign = "rock";
    }
    if (e.contains("paper")) {
      console.log("paper");
      this._sign = "paper";
    }
    if (e.contains("scissors")) {
      console.log("scissors");
      this._sign = "scissors";
    }
  }

  _PointIncrease() {
    console.log("Point increase");
    this._points++;
  }

  _RandomizeSign() {
    console.log("Randomize Sign");
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
      case 0:
        this._sign = "rock";
        break;
      case 1:
        this._sign = "paper";
        break;
      case 2:
        this._sign = "scissors";
        break;
    }
  }
}
