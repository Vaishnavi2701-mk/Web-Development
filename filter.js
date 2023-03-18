// Filtering out something

const arr = [4, 3, 7, 8, 2];
function isOdd(x) {
  return x % 2;
}

function isEven(x) {
  return x % 2 === 0;
}

function isGreaterthan4(x) {
  return x > 4;
}

console.log(arr.filter(isOdd));
console.log(arr.filter(isEven));
console.log(arr.filter(isGreaterthan4));


