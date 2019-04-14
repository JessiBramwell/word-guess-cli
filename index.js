var Word = require('./Word');
var inquirer = require('inquirer')
var output = require('./output')
var chalk = require('chalk')
var word, score, wordArray;

function init() {
  wordArray = output.wordsList
  score = 0;
  wordSelect()
}

function wordSelect() {
  word = wordArray[Math.floor(Math.random() * wordArray.length)]
  word = new Word(word);
  var x = wordArray.indexOf(word.word)
  wordArray.splice(x, 1)
}

inquirer.prompt([output.play]).then(function (res) {
  if (res.play) {
    init();
    play();
  }
});

function play() {

  switch (true) {
    case (word.incorrect <= 0):
      loss()
      break;

    case (word.completed):
      nextWord()
      break;

    case (!word.completed):
      keepGuessing();
      break;
  }
}

function keepGuessing() {
  console.log(chalk.gray('You have ' + chalk.cyan(word.incorrect) + ' incorrect guesses left'))

  inquirer.prompt([output.guess]).then(function (res) {
    if (res.guess.length === word.word.length) {
      wordGuess(res.guess)
    } else {
      word.guess(res.guess)
      play()
    }
  })
}
function nextWord() {
  score++
  console.log(chalk.whiteBright('Score: ') + chalk.cyanBright(score));
  if (score > 2) {
    win();
  } else {
    inquirer.prompt([output.next]).then(function (res) {
      if (res.next) {
        wordSelect()
        play()
      }
    });
  }
}
function loss() {
  console.log('You ran out of guesses. The word was ' + chalk.whiteBright(word.word));
  return

}
function win() {
  inquirer.prompt([output.newGame]).then(function (res) {
    if (res.newGame) init();
  })
}

function wordGuess(res) {
  if (res === word.word) {
    console.log('You guessed the whole word!');
    nextWord()
  } else {
    console.log('Nice try');
    loss();
  }
}







