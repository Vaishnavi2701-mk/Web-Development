// One variable shadows other variable

var a = 100;

{
  var a = 10;
  console.log(a); // 10
}

console.log(a); // 10

// as both a are same because they are declared with "var", so new value will overwrites the old value

let b = 200;
{
  let b = 20;
  console.log(b); //20
}

console.log(b); //200

// here these two "b's" are different variables

// let c = 10;
// {
//   var c = 20;
//   console.log(c);
// }
// console.log(c);

// when a specific variable is declared with let then we cannot declare it by something else

var c = 10;
{
  let c = 20;
  console.log(c);
}
console.log(c);

// we can shadow "var" variable with let
