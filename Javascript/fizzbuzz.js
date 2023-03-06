// We have the numbers starting from 1, we have to print 'fizz' if its divisible by 4 and 'buzz'if its divisible by 5,
// and 'fizzbuzz' if its divisible by 3 and 5

var nums = [];
var count = 1;

function fizzbuzz() {
  if (count % 3 === 0 && count % 5 == 0) {
    nums.push("fizzbuzz");
  } else if (count % 3 == 0) {
    nums.push("fizz");
  } else if (count % 5 == 0) {
    nums.push("buzz");
  } else {
    nums.push(count);
  }
  count++;
  console.log(nums);
}

fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();