// Strings

// 1. use of string.length

// Que: You have written 180 characters and 100 characters are remaining

var tweet1 = prompt("Enter your tweet!");
var tweetCount = tweet1.length;
alert("You have written" + " " + tweetCount + " " + "characters and " + (280-tweetCount) + " characters are remaining");

// 2. use of string.slice(x,y) y= ending including not

var tweet2 = prompt("Compose your tweet!");
alert(tweet2.slice(0,140));

// 3. use of toUpperCase and toLowerCase

// Que: Write Hello, Vaishnvai without actually writing it but by using string function and you get smallercase first letter in input !

// Steps;

// Entered the input
var name = prompt("Enter your name !");
// 1. breakdown given input in first_letter and rest_part
var first_letter = name.slice(0,1);
// 2. convert first letter in uppercase 
var uppercaseFirstLetter = first_letter.toUpperCase();
// 3. get the rest part of name
var restName = name.slice(1, name.length);
// 4. it might happen that user entered invalid case thus change rest of the part in lowercase
var lowercaseRestname = restName.toLowerCase();
// 5. now concatenate the whole name
var updatedName = uppercaseFirstLetter+lowercaseRestname;
// 6. pop out the actuall message
alert("Hello," + " " + updatedName);