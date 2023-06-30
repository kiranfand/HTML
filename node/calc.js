// calc.js

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    return a / b;
  }
  
  // Function to square a number
  function square(a) {
    return a * a;
  }
  
  // Function to calculate the sum of multiple numbers
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Export the functions to make them accessible outside the module
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    sum,
  };
  