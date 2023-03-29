const users = [
  { firstName: "Vaishnavi", lastName: "Mokadam", age: 20 },
  { firstName: "Deepika", lastName: "Padukone", age: 37 },
  { firstName: "Narendra", lastName: "Modi", age: 65 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Shruti", lastName: "Khivansara", age: 20 },
];

// We want array as ["Vaishnavi Mokadam", "Deepika Padukone",.....]

console.log(users.map((x) => x.firstName + " " + x.lastName));

// we need [20:2,37:1,65:1,50:1]

console.log(
  users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
      acc[curr.age]++;
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {})
);

// we need firstname of people having age less than 40

const output = users.filter((x) => x.age < 40).map((x) => x.firstName);
console.log(output);
