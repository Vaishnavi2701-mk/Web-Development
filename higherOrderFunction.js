/*  A function which uses other function as an argument or returns other function as an output
    are called as Higer Order Function

Giver array of radius of circle, calculate its area , circumference, diameter

const radius = [2, 3, 4, 5];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.floor(Math.PI * radius[i] * radius[i]));
  }
  return output;
};

console.log(calculateArea(radius));

Output

   [ 12, 28, 50, 78 ]
   

But this code will repeat itself again and again as we do similar for circumference and diameter

We have to use DRY (Do not Repeat Yourself)

*/

const radius = [2, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// const calculate = function (array, logic) {
//   const output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(logic(array[i]));
//   }
//   return output;
// };

// if we wnat to use calculate as a .map function then we have to make it as a pollyfill function

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

// console.log(calculate(radius.map(area)));
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
