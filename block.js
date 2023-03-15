// Anything inside a { } is called as a block;

{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

// we can access "var" identifiers outside the block but identifiers which are declared with "let & const" cannot be accessed outside the block
