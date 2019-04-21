const Word = require('./Word');
const inquirer = require('inquirer')
const output = require('./output')
const chalk = require('chalk')
let word, score, wordArray;

// Init word guess game
function init() {
  // Make a copy of 'wordsList'
  wordArray = output.wordsList.slice(0)
  score = 0;
  wordSelect(wordArray)
}

// Select a random word and remove it from the array
// Create a new Word object
function wordSelect(arr) {
  word = arr[Math.floor(Math.random() * arr.length)]
  word = new Word(word);
  var x = arr.indexOf(word.word)
  arr = arr.splice(x, 1)
}

// Prompt to begin game
inquirer.prompt([output.prompt.play]).then((res) => {
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

// Prompt for the users next guess
function keepGuessing() {
  console.log(chalk.gray('You have ' + chalk.cyan(word.incorrect) + ' incorrect guesses left'))

  inquirer.prompt([output.prompt.guess]).then((res) => {
    // Determine if the user is attempting to guess the whole word
    if (res.guess.length === word.word.length) {
      wordGuess(res.guess)
    } else {
      word.guess(res.guess)
      play()
    }
  });
}

// Increase score and prompt for the next word
function nextWord() {
  score++
  console.log(chalk.whiteBright('Score: ') + chalk.cyanBright(score));
  if (score > 5) {
    win();
  } else {
    inquirer.prompt([output.prompt.next]).then((res) => {
      if (res.next) {
        wordSelect(wordArray)
        play()
      }
    });
  }
}

// Called when the user attempts to guess the entire word. Results in an automatic loss if worng 
function wordGuess(res) {
  if (res === word.word) {
    console.log('You guessed the whole word!');
    nextWord()
  } else {
    console.log('Nice try');
    loss();
  }
}

function loss() {
  console.log('You ran out of guesses. The word was ' + chalk.whiteBright(word.word));
  return
}

function win() {
  inquirer.prompt([output.prompt.newGame]).then((res) => {
    if (res.newGame) init();
  });
}







