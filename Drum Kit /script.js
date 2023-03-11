// Detect that button is pressed

var buttonCount = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    //this.style.color = "white";
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
  });
}

// Detect that key is pressed
// We applied this eventlistner to whole page

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentkey) {
  // detecting current button
  var activeButton = document.querySelector("." + currentkey); // .w or .a (we are using class to detect the current key)
  // adding class pressed by classist
  activeButton.classList.add("pressed");
  // going back to original condition after 1 sec by removing the same class
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// Impliment a functionality, if we clicked on any button it should pop up the message

// var buttonCount = document.querySelectorAll(".drum").length;
// for (var i = 0; i < buttonCount; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked!");

//     // what to do when click
//   });
// }

/* document.querySelector("button").addEventListener("click", drumRoll); 
// when we use a function here we didn't add () because it will act first even before the event

function drumRoll() {
  alert("I got clicked!");
} */

// Higher Order Function
// The function which can take other functions as an input

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// console.log(calculator(2, 3, subtract));

// adding event listenrs
// var buttonCount = document.querySelectorAll(".drum").length;
// for (var i = 0; i < buttonCount; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var buttonInnerHTML = this.innerHTML;

//     switch (buttonInnerHTML) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;

//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;

//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;

//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;

//       case "j":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;

//       case "k":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;

//       case "l":
//         var kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;

//       default:
//         console.log(buttonInnerHTML);
//     }

//     //this.style.color = "white";
//     // var audio = new Audio("sounds/tom-1.mp3");
//     // audio.play();
//   });
// }
