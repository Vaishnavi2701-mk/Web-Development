function x() {
  let i = 10;
  setTimeout(function () {
    console.log(10);
  }, 3000);
  console.log("Namaste javascript");
}
x();

// Even after we declared Namaste Javascript later it will print first and then 10 will print after the delay of 3 sec
// function attached with JS is taken out of call stack and timer attached to it as soon as timer expires it gets back into the callstack
