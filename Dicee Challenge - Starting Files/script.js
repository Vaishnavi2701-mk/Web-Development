var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Number between 1-6
var randomDiceimage = "dice" + randomNumber1 + ".png"; // dice 1- dice 6
var randomImageSource = "images/" + randomDiceimage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If Player 1 won

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 wins!";
}

// If Player 2 won
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🥇 Player 2 wins!";
}

// If draw
else {
  document.querySelector("h1").innerHTML = "☹️ Draw!";
}
