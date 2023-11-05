/*
Building on the previous exercise, write a function that returns true
or false based on whether or not an inventory item is available. As
before, the function takes two arguments: an inventory item and a list
of transactions. The function should return true only if the sum of the
quantity values of the item's transactions is greater than zero. Notice
that there is a movement property in each transaction object. A movement
value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous
exercise.
*/

function transactionsFor (itemID, listOfTransactions) {
  return listOfTransactions.filter(transaction => transaction.id === itemID);
}

function isItemAvailable (itemID, listOfTransactions) {
  let itemTransactions = transactionsFor(itemID, listOfTransactions);

  let totalMovementsIn = itemTransactions
    .filter(item => item.movement === 'in')
    .reduce((accum, el) => (accum + el.quantity), 0);

  let totalMovementsOut = itemTransactions
    .filter(item => item.movement === 'out')
    .reduce((accum, el) => accum + el.quantity, 0);

  return totalMovementsIn > totalMovementsOut;
}

// nice solution by Sergio Ravera
function isItemAvailable1(itemID, list) {
  let currentItem = transactionsFor(itemID, list);
  let amountAvailable = currentItem.reduce((acc, obj) => {
    if (obj["movement"] === "in") return acc + obj["quantity"];
    if (obj["movement"] === "out") return acc - obj["quantity"];
  }, 0);

  return amountAvailable > 0;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true