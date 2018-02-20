const prompt = require('prompt');

prompt.start();

// creates default current user
let currentUser = 'O';

// toggles the current user
const changeUser = () => {
  currentUser === 'O' ?
  currentUser = 'X' :
  currentUser = 'O';
};

// creates playing table
let table = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

const tableReset = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// prints playing table
const printTable = () => {
  console.log(`| ${table[0][0]} | ${table[0][1]} | ${table[0][2]} |\n`);
  console.log('----------');
  console.log(`| ${table[1][0]} | ${table[1][1]} | ${table[1][2]} |\n`);
  console.log('----------');
  console.log(`| ${table[2][0]} | ${table[2][1]} | ${table[2][2]} |\n`);
}

// prints which user's turn it is
const printUserTurn = () => {
  console.log(`It's ${currentUser}'s turn!\n`);
};

// handles user adding x's and o's to the table
const handleEntry = (entry) => {
  const splitEntry = entry.split('');
  // allows for case insensitive entries
  splitEntry[0] = splitEntry[0].toUpperCase();

  let heightIndex = null;
  let widthIndex = Number(splitEntry[1]) - 1;
  
  splitEntry[0] === 'A' ? heightIndex = 0 :
  splitEntry[0] === 'B' ? heightIndex = 1 :
  splitEntry[0] === 'C' ? heightIndex = 2 : null;
  
  table[heightIndex][widthIndex] !== ' ' ? null :
  table[heightIndex][widthIndex] = currentUser;
}

const checkWinner = () => {
  let winner = null;

  // checks for row wins
  for (let i = 0; i < table.length; i++) {
    let row = table[i];

    let xWins = row.every(user => user === 'X');
    let oWins = row.every(user => user === 'O');
  
    xWins ? winner = 'x' :
    oWins ? winner = 'o' : null;
  }

  // checks for column wins

  return winner;
}

const promptNewGame = () => {
  prompt.get(['Start a new game? y / n'],
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      let answer = result[['Start a new game? y / n']];
      if (answer === 'y') {
        table = tableReset;
        currentUser = 'O'
        startGame();
      }
    }
  }
)}

// prompts users to select a spot in the table
const promptUser = () => {
  prompt.get(['Pick a slot number on the board \n (A-C for height, 1-3 for width)'], 
  (err, result) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`You picked ${result['Pick a slot number on the board \n (A-C for height, 1-3 for width)']}`);
      handleEntry(result['Pick a slot number on the board \n (A-C for height, 1-3 for width)']);
      changeUser();
      printUserTurn();
      printTable();

      let winner = checkWinner();

      if (winner) {
        console.log(`${winner.toUpperCase()} wins the game!`);
        promptNewGame();
        return;
      }

      promptUser();
    }
  });
}

// start the game
const startGame = () => {
  printUserTurn();
  printTable();
  promptUser();
}

startGame();