// Case-1 : It will print 10; because a=100 will be totally new;

function outer() {
  function inner() {
    let a = 10;
    console.log(a);
  }
  return inner;
}
let a = 100;

console.log(outer()());

// Case-2 : It will search for a in parents scope
function outer() {
  let a = 100;
  function inner() {
    //let a = 10;
    console.log(a);
  }
  return inner;
}

console.log(outer()());

// Case-3 : Reference erroe because a not found

function outer() {
  function inner() {
    console.log(a);
  }
  return inner;
}

console.log(outer()());
