// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = `I'm outside the function`;

function myFunction() {
  console.log(external);
  const internal = `Hello! I'm inside myFunction!`;

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
  Only after being invoked on line 17, nested function, after being invoked on line 15, looks for the declaration 'internal' first within its own function and then outside of it. nestedfunction() finds 'internal' outside of its own function and is then able to use 'internal' within its own function. nestedfunction() is also only able to be called within myFunction. If called outside of it, nestedFunction() isn't something that exists outside of 'myFunction' and, therefore, can't be invoked.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let counter = 0;

  function count() {
    for (let i = 0; i <= num; i++) {
      counter += i;
    }
  }
  count();
  return counter;
}

console.log(summation(4));
