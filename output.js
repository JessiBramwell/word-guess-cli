const prompt = {
  play: {
    type: 'confirm',
    message: 'Would you like to play hangman? It\'s Game Show themed',
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
  },
  newGame: {
    type: 'confirm',
    message: 'You Win!!! Would you like to play again?',
    name: 'newGame'
  },
}

const wordsList = [
  'jeopardy',
  'wheel of fortune',
  'family feud',
  'the price is right',
  'who wants to be a millionaire',
  'double dare',
  'beat the clock',
  'hollywood squares',
  'the newlywed game',
  'the dating game'
]

module.exports = {
  prompt: prompt,
  wordsList: wordsList
}