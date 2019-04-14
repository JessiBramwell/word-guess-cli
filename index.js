var Word = require('./Word');
var inquirer = require('inquirer')
var wordArray = ['these', 'words', 'are', 'random'];
var word = ''
var prompt = {
  play: {
    type: 'confirm',
    message: 'Would you like to play hangman?',
    name: 'play'
  },
  guess: {
    message: 'Guess a letter',
    name: 'guess'
  },
  next: {
    type: 'confirm',
    message: 'Would you like to play again?',
    name: 'next'
  }
}

inquirer.prompt([prompt.play]).then(function(res) {
  if(res.play) {
    init()
    play()
  }
})

function init() {
  word = wordArray[Math.round(Math.random() * wordArray.length)]
  word = new Word(word);
}

function play() {
  if (!word.completed) {
    inquirer.prompt([prompt.guess]).then(function (res) {
      word.guess(res.guess)
      play()
    })
  } else {
    inquirer.prompt([prompt.next]).then(function (res) {
      if(res.next) init()
    })
  }
}




