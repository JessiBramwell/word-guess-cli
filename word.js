var Letter = require('./Letter')

// Word constructor 
function Word(word) {
  this.letterArray = [];
  this.word = word;
  this.incorrect = 7;
  this.completed = false;
  this.wordToArray(),
  this.display()
}

// Create an array of Letter objects
Word.prototype.wordToArray = function () {
  for (let letter of this.word) {
    this.letterArray.push(new Letter(letter));
  }
}

// Display each letter or placeholder
Word.prototype.display = function () {
  var show = ''
  this.letterArray.forEach((item) => {
    show += item.toString() + ' '
  });
  console.log(show)
}

// Compairs guess against letters in the word
Word.prototype.guess = function (g) {
  if (this.word.includes(g)) {
    this.letterArray.forEach((item) => {
      item.compair(g)
    });
    this.display()
  } else {
    this.incorrect--
  }
  this.update()
}

// Compair the number of guessed letters with the length of the word
// Update the 'completed' status
Word.prototype.update = function () {
  var count = 0
  this.letterArray.forEach((item) => {
    if (item.guessed) count++
  });
  if (count === this.word.length) this.completed = true
}

module.exports = Word;