var Letter = require('./Letter')

function Word(word) {
  this.letterArray = [];
  this.word = word;
  this.completed = false
  this.wordToArray = function () {
    for (let letter of this.word) {
      this.letterArray.push(new Letter(letter));
    }
  },
  this.wordToArray()
  this.display = function() {
    var show
    this.letterArray.forEach(function(item) {
      show += item.toString() + ' '
    })
    console.log(show)
  },
  this.display()
  this.guess = function (g) {
    var count = 0
    this.letterArray.forEach(function(item) {
      item.compair(g)    
      if (item.guessed) count++  
    })
    if(count === word.length) this.completed = true
    // console.log(test.letterArray)
    this.display()
  }
}

// var test = new Word('test')
// console.log(test.letterArray.toString());
// console.log(test.);
// console.log(test.letterArray)
// test.guess('t')
// console.log(test.letterArray)

module.exports = Word;