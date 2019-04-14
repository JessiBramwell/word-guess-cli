function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
  this.toString = function () {
    if (this.letter == ' ') {
      this.guessed = true
    } 
    if (this.guessed) {
      return this.letter;       
    } else {
      return '-'
    }
  },
  this.compair = function (g) {
    if (g === this.letter) {
      this.guessed = true
    }
  }
}

module.exports = Letter;