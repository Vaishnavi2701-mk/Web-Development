// by using random number generator build a Love Calculator

var name1 = "Vaishnavi"; // prompt("Enter first name!");
var name2 = "Siddharth"; // prompt("Enter second name!");

var n = Math.random();
var loveScore = Math.floor(n * 100) + 1;

console.log(name1 + " * " + name2 + "=" + loveScore);

// If we want range then multiply n with that range and then add 1 because;
// If the range is 100 it will generate number between 0-99 because of Math.floor() then add 1;

if (loveScore > 70) {
  console.log("You love her like Kanye loves Kanye!");
} else if (loveScore > 30 && loveScore <= 70) {
  console.log("You love her like balance! ");
} else {
  console.log("You both go together as oil and water!");
}
