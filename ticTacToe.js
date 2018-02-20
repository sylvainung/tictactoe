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
