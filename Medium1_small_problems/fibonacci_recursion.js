/*
The Fibonacci series is a sequence of numbers in which each number is the
sum of the previous two numbers.

In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

A good recursive function has three primary qualities:

1. It calls itself at least once.
2. It has an ending condition — e.g., if (num === 1), in the sum function above.
3. The results of each recursion are used in each step
— e.g., num + sum(num - 1) uses sum(num - 1).

Write a recursive function that computes the nth Fibonacci number,
where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises,
so do not be discouraged if you are not able to solve it on your own;
recursion is tricky, and even experienced developers can have difficulty
dealing with it.
*/

// function sum(num) {
//   if ( num === 1) {
//     return 1;
//   }
//   return num + sum(num - 1);
// }

// console.log(sum(3));

function fibonacci (num) {
  if (num < 3) return 1;
  // if (num <= 2) return 1; // LS solution
  // if (num === 1 || num === 2) return 1; // Brian solution

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765