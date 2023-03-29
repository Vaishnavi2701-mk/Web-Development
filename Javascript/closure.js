// Closures : Functions which are bind within its lexical environment are called closures

// function x() {
//   var a = 10;
//   return function y() {
//     console.log(a);
//   };
// }

// var z = x(); // assigning the value of x to z i.e., y function and x ended here
// console.log(z); // return function y
// console.log(z()); // return 10;

// function a() {
//   var x = 10;
//   function b() {
//     var y = 20;
//     function c() {
//       console.log(y, x);
//     }
//     c();
//   }
//   b();
// }
// a();

// function outer() {
//   var ab = 10;
//   function inner() {
//     console.log(ab);
//   }
//   return inner();
// }

// console.log(outer()); // return inner function
// console.log(outer()()); // return 10;

// // instead we can do like;

// var output = outer();
// console.log(output()); // return 10;

// function outer(b) {
//   var ab = 10;
//   function inner() {
//     console.log(ab, b);
//   }
//   return inner();
// }

// var output = outer("Hello World!");
// console.log(output);

function outest() {
  var c = 20;
  function outer(b) {
    var ab = 10;
    function inner() {
      console.log(ab, b, c);
    }
    return inner;
  }
  return outer;
}

console.log(outest()); // outer function
console.log(outest()()); // inner function
var output = outest()();
console.log(output()); // 10, undefined 20;
var output = outest()("Hello World!");
console.log(output()); // 10 Hello World 20;

// Use of Closure

// - Module Design Pattern
// - Currying
// - functions like "once" //function which ocurres only once
// - Memoize
// - Maintaining states in Asynchronus world
// - setTimeouts
// - Iterators
// - Many more .......
