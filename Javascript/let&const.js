// hoisting the variable <-------------> initializing the value
//                                |
//                                |
//                                |
//                                |
//                                V
//                       Temporal Dead Zone

// 1. Referance Error : When we try to access the variable from temporal zone/ variable from another space

console.log(x); // referance error
let x = 10;
var y = 20;

// // This happens because "x" is not in the global execution context, let variables has its own space;
// // so we cannot access  let variables even before declaring it.

// // let & const are hoisted

console.log(window.y); //possible
console.log(window.x); // not possible

// window is a global object and as let is not in global execution context we cannot access it by window object

// possible
var a = 10;
var a = 1000;

// Not possible will give syntax error
let b = 20;
let b = 2000;

// 2. Syntax Error : let variable with same identifier cannot be declared more than once

let c;
c = 90; // possible

const d;
d=100; // Not possible

// const variable should be declared and initialized at a same time

// 3. Typeerror : when value is not of expected type

