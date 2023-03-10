// Impliment a functionality, if we clicked on any button it should pop up the message

var buttonCount = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");

    // what to do when click
  });
}

/* document.querySelector("button").addEventListener("click", drumRoll); 
// when we use a function here we didn't add () because it will act first even before the event

function drumRoll() {
  alert("I got clicked!");
} */

// Higher Order Function
// The function which can take other functions as an input

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(calculator(2, 3, subtract));
