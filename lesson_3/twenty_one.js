
// (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
const RLS = require('readline-sync');
const DECK = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
  5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
  10, 10, 10, 10, 'Jack', 'Jack', 'Jack', 'Jack', 'Queen',
  'Queen', 'Queen', 'Queen', 'King', 'King', 'King', 'King',
  'Ace', 'Ace', 'Ace', 'Ace'];
const FACE_CARDS = ['Jack', 'Queen', 'King'];
const ACE = 'Ace';
const CARD_TOTAL_LIMIT = 21;

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function joinOr(array, delimiter = ', ', finalConjunction = 'and') {
  if (array.length <= 1) return String(array);
  else if (array.length === 2) return `${array[0]} ${finalConjunction} ${array[1]}`;
  else {
    const strWithoutConj = array.slice(0, -1).reduce((accum, el) => accum + el + delimiter, '');
    return `${strWithoutConj}${finalConjunction} ${array.slice(-1)}`;
  }
}

function dealInitialCards(deck, dealerCards, playerCards) {
  dealCard(deck, dealerCards);
  dealCard(deck, dealerCards);

  dealCard(deck, playerCards);
  dealCard(deck, playerCards);
}

function dealCard(deck, cards) {
  cards.push(deck.shift());
}

function displayCards(dealerCards, playerCards) {
  console.log(`\nDealer has: ${dealerCards[0]} and an unknown card`);
  console.log(`You have: ${joinOr(playerCards)}`);
}

function displayFinalCards(dealerCards, playerCards) {
  console.log(`\n===== Final Cards =====`);
  console.log(`\nDealer had: ${joinOr(dealerCards)}`);
  console.log(`You had: ${joinOr(playerCards)}`);
}

function getPlayerChoice() {
  console.log('\nDo you want to (h)it or (s)tay? ');
  let response = RLS.question().trim().toLowerCase();

  while (!['h', 's', 'hit', 'stay'].includes(response)) {
    console.log('Please enter "hit" or "h" to deal a new card, or "stay" or "s" to keep your current total: ');
    response = RLS.question().trim().toLowerCase();
  }

  return response === 's' || response === 'stay' ? 'stay' : 'hit';
}

function calculateTotal(cards) {
  return mapCardsToValues(cards).reduce((accum, val) => accum + val, 0);
}

function mapCardsToValues (cards) {
  // filter out aces
  const nonAceCardVals = cards.filter(card => card !== ACE)
    .map(card => {
      return FACE_CARDS.includes(card) ? 10 : card;
    });
  // console.log('nonAceCardVals: ', nonAceCardVals);

  let totalScore = nonAceCardVals.reduce((accum, val) => accum + val, 0);

  let aceCardVals = cards.filter(card => card === ACE)
    .map(_card => {
      if (totalScore + 11 <= 21) {
        totalScore += 11;
        return 11;
      } else {
        totalScore += 1;
        return 1;
      }
    });
  // console.log('aceCardVals: ', aceCardVals);

  // console.log('new array of card vals:', nonAceCardVals.concat(aceCardVals));
  return nonAceCardVals.concat(aceCardVals);
}

function isBusted(cards) {
  return calculateTotal(cards) > CARD_TOTAL_LIMIT;
}

function runPlayerTurn(deck, dealerCards, playerCards) {
  while (true) {
    if (isBusted(playerCards)) break;

    console.clear();
    displayCards(dealerCards, playerCards);
    let choice = getPlayerChoice();

    if (choice === 'stay') break;

    dealCard(deck, playerCards);
  }
}

function runDealerTurn(deck, cards) {
  while (true) {
    if (calculateTotal(cards) >= 17 || isBusted(cards)) break;
    dealCard(deck, cards);
  }
}

function findWinner(dealerCards, playerCards) {
  let winner;
  if (isBusted(playerCards)) {
    winner = 'Dealer';
  } else if (isBusted(dealerCards)) {
    winner = 'Player';
  } else if (calculateTotal(dealerCards) > calculateTotal(playerCards)) {
    winner = 'Dealer';
  } else if (calculateTotal(playerCards) > calculateTotal(dealerCards)) {
    winner = 'Player';
  }

  return winner;
}

function displayWinner(winner) {
  if (winner === 'Player') {
    console.log('\nYou won! Nice job!');
  } else if (winner === 'Dealer') {
    console.log('\nDealer won. Better luck next time!');
  } else {
    console.log('\nTie. You both stayed at 17!');
  }
}

function play21() {
  console.clear();
  let gameDeck = shuffle(DECK.slice());
  let dealerHand = [];
  let playerHand = [];

  dealInitialCards(gameDeck, dealerHand, playerHand);

  while (true) {
    runPlayerTurn(gameDeck, dealerHand, playerHand);
    if (isBusted(playerHand)) break;

    runDealerTurn(gameDeck, dealerHand);
    break;
  }

  displayFinalCards(dealerHand, playerHand);
  displayWinner(findWinner(dealerHand, playerHand));
}

function playAgain() {
  console.log('\nWould you like to play 21 again? (y/n): ');
  let response = RLS.question().trim().toLowerCase();

  while (!['y', 'n'].includes(response)) {
    console.log('Please enter "y" to play again or "n" to exit: ');
    response = RLS.question().trim().toLowerCase();
  }

  return response;
}

function displayWelcome() {
  console.log('Welcome to 21, the game!');
}

function displayRules() {
  console.log('\nHere are the rules!');
  console.log('\n- Given a deck of 4 suits and 52 cards, the dealer (computer) will deal two cards to you and two to themself.');
  console.log('\n- Number cards are worth their value in points, face cards are worth 10 points, and aces are worth either 11 points or 1 point in your favor');
  console.log('\n- Whoever gets closest to the total score 21, without exceeding 21, wins the game!');
  console.log("\n- You will only be able to see one of the dealer's cards during the game.");
  console.log('\n- You have the option to "hit" or be dealt another card until you are satisfied with your score. But, if you are dealt another card, and you exceed 21 with that card, you are "busted" and the dealer wins!');

  console.log("\nAfter you've read the rules any key to begin: ");
  RLS.question();
}

function displayGoodbye() {
  console.log('\nThank you for playing 21. See you next time!');
}

function run21GameEngine() {
  while (true) {
    console.clear();
    displayWelcome();
    displayRules();

    play21();

    if (playAgain() === 'n') break;
  }

  displayGoodbye();
}

run21GameEngine();