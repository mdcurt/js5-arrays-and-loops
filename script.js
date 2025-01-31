const colors =['red,green','blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

// what is an array?
// function, objects, array, integers, strings

const mixedArray = [1, "hello", true, {name: "John"}, [10,20]];
console.log(mixedArray);

const color = ["red", "green", "blue", "yellow"];
console.log(color[2]);

const fruits = ["apple", "peaches", "blueberries", "cucumbers"]

const numbers = [1,2,3];
numbers.push(4);
console.log(numbers);

//for loop

const colors2 =["red","green","blue"]
for (let i = 0; i < colors2.length; i++) {
  console.log(colors2[i]);
}

//while loop
let count = 3;
while (count > 0) {
  console.log(count);
  count--;
}

// for of loop (arrays)
const fruits2 = ["apple", "banana","cherry"];
for(const fruit of fruits) {
  console.log(fruit);
}
//for...in (objects)
const value = {
  name: "Alice",
  age: 25,
  profession: "Developer",
};

for (let key in value){
  console.log(`${key}:${value[key]}`)
}

const numbers2 = [10, 20, 30];
let sum = 0;

for(let i2 = 0; i2 < numbers2.length; i2++) {
  sum += numbers2[i2];
}
console.log(`Sum: ${sum}`);

const numbers3 = [1,2,3,4,5];
const evens = [];

for (const number3 of numbers3) {
  if (number % 2 === 0) {
  evens.push(number3);
  }
}
console.log(evens);
