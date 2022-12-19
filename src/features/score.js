class Score {
  constructor() {
    this.score = 0;
    this.maxScore = 0;
  }

  increase() {
    this.score++;
    this.setMaxScore();
    return this;
  }

  decrease() {
    this.score--;
    return this;
  }

  reset() {
    this.score = 0;
    return this;
  }

  getScore() {
    return this.score;
  }

  setMaxScore() {
    if (this.score > this.maxScore) {
      this.maxScore = this.score;
    }
    return this;
  }

  getMaxScore() {
    return this.maxScore;
  }
}

export default Score;
