// 1. Function Declaration/ Function Statement
// Decalartion of a function

a();

function a() {
  console.log("Hello World!");
}

//a()

// 2. Anonymous Function
// Function without name, we cannot execute them as it will give syntax error => required a function name

// function(){
//     console.log("Hii");
// }

// 3.Function Expression
// Functions can used as a value , when we assign an anonymous function to a variable ; then it is called as Function Expression

// output(); => Typeerror- output is not a function

var output = function () {
  console.log("Hello!");
};

output();

// The difference between function expression and function declaration is "Hoisting"

// 4. Named Function Expression
// The only difference is it uses named function as a variable

var ans = function xyz() {
  console.log("Hello");
};

ans();
// xyz(); Referance Error => XYZ() is not defined

// 5. First Class Function/ First Class Citizen
// function which can be used as a value are called as a First Class Citizen/Function

var output = function () {
  console.log("Hello!");
};

//6. Parameters & Argument

function xyz(num1, num2) {
  //=> parameters
  console.log(num1 + num2);
}

xyz(2, 3); // => arguments
