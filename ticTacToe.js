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

