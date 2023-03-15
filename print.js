// Print numbers from 1 to 10 after the delay as a same number

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste Javascript");
}
x();

// output

// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

// This happens because as timer will expire till then i becomes equal to 6 as it overwrites, so use "let" instaed of var

// If we want to solve this by using var then we have to create a closure

function x() {
  for (let i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Namaste Javascript");
}
x();
