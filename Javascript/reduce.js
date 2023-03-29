// Reduce doesn't reduce anything but gives a firm value
// It takes 2 parameters (accumulator, current)

const arr = [2, 3, 4, 5];

//sum of an array
const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);

//maximum of an array

const output1 = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output1);
