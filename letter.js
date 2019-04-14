function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
  this.toString = function () {
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

// var test = new Letter('t')
// console.log(test)
// console.log(test.toString())
// console.log(test.compair('t'))
// console.log(test.toString())
// console.log(test)

module.exports = Letter;