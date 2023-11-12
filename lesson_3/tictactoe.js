// notes
// try to replace X and O with emoji symbol - node package npm required
// extract messages to JSON file

const rls = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_COMBOS = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log(`(You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}.)`);

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

// eslint-disable-next-line max-lines-per-function
function isDefensiveMovePresent(board) {
  let square = null;

  for (let combo = 0; combo < WINNING_COMBOS.length; combo += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_COMBOS[combo];
    if (board[sq1] === PLAYER_MARKER
        && board[sq2] === PLAYER_MARKER
        && board[sq3] === INITIAL_MARKER) {
      square = sq3;
      break;
    } else if (board[sq1] === PLAYER_MARKER
               && board[sq3] === PLAYER_MARKER
               && board[sq2] === INITIAL_MARKER) {
      square = sq2;
      break;
    } else if (board[sq2] === PLAYER_MARKER
               && board[sq3] === PLAYER_MARKER
               && board[sq1] === INITIAL_MARKER) {
      square = sq1;
      break;
    }
  }

  return square;
}

function computerChoosesSquare(board) {
  let square;

  let defensiveMove = isDefensiveMovePresent(board);
  if (defensiveMove) {
    square = defensiveMove;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function isGameWon(board) {
  return !!findWinner(board);
}

function findWinner(board) {
  let winner = null;

  for (let combo = 0; combo < WINNING_COMBOS.length; combo += 1) {

    let [ sq1, sq2, sq3 ] = WINNING_COMBOS[combo];

    if (board[sq1] === PLAYER_MARKER &&
        board[sq2] === PLAYER_MARKER &&
        board[sq3] === PLAYER_MARKER) {
      winner = 'player';
    }

    if (board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER) {
      winner = 'computer';
    }
  }

  return winner;
}

function isBoardFull(board) {
  return emptySquares(board).length === 0;
}

function displayGameResult(board) {
  if (isGameWon(board)) {
    let gameWinner = findWinner(board);
    if (gameWinner === 'player') {
      prompt('You won this game!\n');
    } else if (gameWinner) {
      prompt('The computer won this game!\n');
    }
  } else {
    prompt("This game is a tie!\n");
  }
}

// currently displaying and returning the winner? should i change this?
function playSingleGame(scoreObj) {
  let board = initializeBoard();

  while (true) {
    console.clear();

    if (scoreObj) {
      displayCurrentScore(scoreObj);
    }

    displayBoard(board);

    playerChoosesSquare(board);
    if (isGameWon(board) || isBoardFull(board)) break;

    computerChoosesSquare(board);
    if (isGameWon(board) || isBoardFull(board)) break;

  }

  console.clear();
  displayBoard(board);
  displayGameResult(board);

  return findWinner(board);
}

function isMatchWon(scoreObj, winCondition) {
  return scoreObj.player === winCondition ||
         scoreObj.computer === winCondition;
}

function displayCurrentScore(score) {
  console.log('===== SCORE =====');
  console.log(`You: ${score.player}, Computer: ${score.computer}\n`);
}

function findMatchWinner(score, winCondition) {
  if (score.player === winCondition) return 'player';
  else if (score.computer === winCondition) return 'computer';
  else return 'ERROR at findMatchWinner()';
}

function displayMatchResult(winner) {
  console.log('===== MATCH RESULT =====');
  if (winner === 'player') {
    console.log('YOU WON THE MATCH! FANTASTIC JOB!\n');
  } else {
    console.log('The computer won the match. Better luck next time!');
  }
}

function playMatchGame() {
  const MATCH_WINNING_SCORE = 5;
  let scores = { player : 0, computer : 0};

  while (true) {
    let currentWinner = playSingleGame(scores);
    scores[currentWinner] += 1; // updates score obj-> so small, decided not to create helper function

    if (isMatchWon(scores, MATCH_WINNING_SCORE)) break;

    console.clear();
  }

  const matchWinner = findMatchWinner(scores, MATCH_WINNING_SCORE);
  displayMatchResult(matchWinner);
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

function playerChoosesGameStyle() {
  prompt('Please choose your game style');
  prompt('Enter "s" for a single game, or "m" for a match: ');

  let response = rls.question().trim().toLowerCase();
  while (!['s', 'm'].includes(response)) {
    prompt('Please enter "s" (single game) or "m" (match) for your choice: ');
    response = rls.question().trim().toLowerCase();
  }

  return response;
}

function displayRules(gameStyle) {
  if (gameStyle === 's') {
    console.log('\n===== SINGLE GAME RULES =====');
    console.log('The first player to mark 3 squares in a row, column or diagonal wins the game.\n');
  } else if (gameStyle === 'm') {
    console.log('\n===== MATCH RULES =====');
    console.log('The first player to win 5 games of Tic-Tac-Toe wins the match.\n');
  }

  prompt('Once you have read the rules, enter any key to begin.');
  rls.question();
}

function runGameEngine() {
  while (true) {
    console.clear();
    prompt("Welcome to Tic-Tac-Toe!");
    let chosenGameStyle = playerChoosesGameStyle();

    displayRules(chosenGameStyle);

    // could extract if statement to separate function
    if (chosenGameStyle === 's') {
      playSingleGame();
    } else {
      playMatchGame();
    }

    if (playAgain() === false) break;
  }

  prompt("Thanks for playing Tic-Tac-Toe! See you another time!");
}

runGameEngine();