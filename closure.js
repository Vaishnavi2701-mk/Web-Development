// Closures : Functions which are bind within its lexical environment are called closures

function x() {
  var a = 10;
  return function y() {
    console.log(a);
  };
}

var z = x(); // assigning the value of x to z i.e., y function and x ended here
console.log(z); // return function y
console.log(z()); // return 10;

function a() {
  var x = 10;
  function b() {
    var y = 20;
    function c() {
      console.log(y, x);
    }
    c();
  }
  b();
}
a();

// Use of Closure

// - Module Design Pattern
// - Currying
// - functions like "once" //function which ocurres only once
// - Memoize
// - Maintaining states in Asynchronus world
// - setTimeouts
// - Iterators
// - Many more .......
