const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

const fName = {
  fName: "Karan",
  lName: "Sparrow"
};

const user = {
  ...fName,
  id: 1,
  username: "Sparrow0000"
};

console.log(user);
console.log(fruits);
