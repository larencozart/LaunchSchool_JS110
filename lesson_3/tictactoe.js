// notes
// try to replace X and O with emoji symbol - node package npm required
// extract messages to JSON file

const rls = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(array, delimiter = ', ', finalConjunction = 'or') {
  if (array.length <= 1) return String(array);
  else if (array.length === 2) return `${array[0]} ${finalConjunction} ${array[1]}`;
  else {
    const strWithoutConj = array.slice(0, -1).reduce((accum, el) => accum + el + delimiter, '');
    return `${strWithoutConj}${finalConjunction} ${array.slice(-1)}`;
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    const squareOptions = joinOr(emptySquares(board));
    prompt(`Choose a square (${squareOptions}): `);
    square = rls.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice");
  }

  board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function isGameWon(board) {
  return !!findWinner(board);
}

function findWinner(board) {
  let winner = null;

  let winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  for (let combo = 0; combo < winningCombos.length; combo += 1) {

    let [ sq1, sq2, sq3 ] = winningCombos[combo];

    if (board[sq1] === PLAYER_MARKER &&
        board[sq2] === PLAYER_MARKER &&
        board[sq3] === PLAYER_MARKER) {
      winner = 'Player';
    }

    if (board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER) {
      winner = 'Computer';
    }
  }

  return winner;
}

function isBoardFull(board) {
  return emptySquares(board).length === 0;
}

function displayGameResult(board) {
  if (isGameWon(board)) {
    prompt(`${findWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
}

function playGame() {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (isGameWon(board) || isBoardFull(board)) break;

    computerChoosesSquare(board);
    if (isGameWon(board) || isBoardFull(board)) break;

    console.clear();
  }

  displayBoard(board);
  displayGameResult(board);
}

function playAgain() {
  prompt('Want to play again? (y/n): ');
  let response = rls.question().trim().toLowerCase();
  while (!['y', 'n'].includes(response)) {
    prompt('Please only enter "y" (to play again) or "n" (to exit): ');
    response = rls.question().trim().toLowerCase();
  }

  return response === 'y';
}

function runGameEngine() {
  while (true) {
    console.clear();
    prompt("Welcome to Tic-Tac-Toe!\n=> First player to get 3 marks in a row, column, or diagonal wins!\n=> Let's start!\n");
    playGame();

    if (playAgain() === false) break;
  }

  prompt("Thanks for playing Tic-Tac-Toe! See you another time!");
}


runGameEngine();