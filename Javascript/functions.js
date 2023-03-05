// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in this format:
// You have x days, y weeks, and z months left.
// Where x, y and z are replaced with the actual calculated numbers.
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

function lifeRemaining(age) {
  var yearsRemaining = 90 - age;
  var x = yearsRemaining * 365;
  var y = yearsRemaining * 52;
  var z = yearsRemaining * 12;

  console.log(
    "You have " + x + " days, " + y + " weeks, and " + z + " months left."
  );
}

lifeRemaining(51);
lifeRemaining(24);

// Return output type functions
// invoking a function and declaring the function is different

// Consider there are certain amount of money, we have to buy bottle of milk.
// We have to calculate change we get and if specific cost of bottle is given then calculate number of bottles we get

function calNumofbottles(money, costofbottle) {
  var numofBottles = money / costofbottle;
  return numofBottles;
}

console.log("You can buy "+ Math.floor(calNumofbottles(4, 1.5)) + " bottles.");

// Math.floor round up number less than or equal to that number

function calChange (money, costofbottle) { 
  var change = money%costofbottle;
  return change;
}

console.log("You will be getting Rs." + calChange(4, 1.5) + " change.");

// BMI calculator

// BMI = weight(kg) / (height ^ 2)(m^2);

function bmiCalculator(weight, height){
  var calBMI = Math.round(weight/Math.pow(height,2));
  return calBMI;
}

var bmi = bmiCalculator(65, 1.65);
console.log("Your BMI is "+bmi);