// We can map something out of array

const arr = [2, 3, 4, 5];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));

// Alternate ways

const output = arr.map(function binary(x) {
  return x.toString(2);
});

console.log(output);

// arrow function

const output1 = arr.map((x) => x * 2);
console.log(output1);
