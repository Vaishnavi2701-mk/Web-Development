// Strings

// 1. use of string.length

// Que: You have written 180 characters and 100 characters are remaining

var tweet1 = prompt("Enter your tweet!");
var tweetCount = tweet1.length;
alert("You have written" + " " + tweetCount + " " + "characters and " + (280-tweetCount) + " characters are remaining")

// 2. use of string.slice(x,y) y= ending including not

var tweet2 = prompt("Compose your tweet!");
alert(tweet2.slice(0,140));