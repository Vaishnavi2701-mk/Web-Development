/* The functions which can be passed inside some othe functions or the functions which can be used inside other function 
   and called according a need or requirement is called as a call back function */

setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

function a() {
  return function b() {
    console.log("Hello");
  };
}

a()();

// Output

/* 

x
y
Hello
Timer

*/
gt6t6tggg;
