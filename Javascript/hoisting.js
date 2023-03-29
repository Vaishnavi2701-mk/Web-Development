// Hoisting in JS

console.log(x); //undefined
getName(); // works fine
getName2(); // Typeerror

var x = 27;

function getName() {
  console.log("Hello Javascript!");
}

// arrow function
var getName2 = () => {
  console.log("Hello Javascript2");
};

// console.log(x);
// getName();
// getName2();
