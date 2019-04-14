var Letter = require('./Letter')

function Word(word) {
  this.letterArray = [];
  this.word = word;
  this.incorrect = 7;
  this.completed = false;
  this.wordToArray = function () {
    for (let letter of this.word) {
      this.letterArray.push(new Letter(letter));
    }
  },
  this.wordToArray()
  this.display = function() {
    var show = ''
    this.letterArray.forEach(function(item) {
      show += item.toString() + ' '
    })
    console.log(show)
  },
  this.display()
  this.guess = function (g) {
    if (this.word.includes(g)) {
      this.letterArray.forEach(function(item) {
        item.compair(g)    
      })  
      this.display()     
    } else {      
      this.incorrect--     
    }
    this.update()
  },
  this.update = function() {
    var count = 0
    this.letterArray.forEach(function (item) {
      if (item.guessed) count++
    })
    if (count === word.length) this.completed = true    
    
  }
}

module.exports = Word;