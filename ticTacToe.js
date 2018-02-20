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
const table = [
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
