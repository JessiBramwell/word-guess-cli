// Letter Constructor
function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
}

// Display letter or placeholder depending on 'guessed' status 
Letter.prototype.toString = function () {
  if (this.letter == ' ') {
    this.guessed = true
  }
  if (this.guessed) {
    return this.letter;
  } else {
    return '-'
  }
}

// Compair guess and update 'guessed' status if correct
Letter.prototype.compair = function (g) {
  if (g === this.letter) {
    this.guessed = true
  }
}

module.exports = Letter;