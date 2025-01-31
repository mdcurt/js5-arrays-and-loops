//Exercise 1: Create a Todo List
// Create an array todoList with three tasks.
//Add a new task.
//Remove the first task.
//Log the updated list.
todoList = ["Take Out the Garbage.","Clean out the Fridge.","Wash the cast iron pots and pans."];
todoList.push("Wash Car.");
todoList.shift();
console.log(todoList);
//Excercise 2: Count Even Numbers
//Create an array of numbers.
//Use a loop to count how many are even.
//Log the result.

evensCount = 0
const numbers = [1,2,3,4,5,6,7];
for(number of numbers) { 
  if (number % 2 === 0) 
  evensCount++
}
console.log(evensCount);

//Exercise 3: Reverse and Array

//The first solution and its for loop reverses an array, however, it neccessitated the use of a secondary variable array to store the results 
let cars = ['altima','accord','fiesta'];
let carsReversed = [];
for (let i = cars.length - 1; i > -1; i--){
  carsReversed.push(cars[i]);
}
console.log(carsReversed);
//This second solution utilized only one variable array, however, it neccessitated a secondary for loop.
let homes = ['flat','shotgun','tiny','bungalow']
primedLength = homes.length
for(let i = homes.length -1; i > -1; i--){
  homes.push(homes[i]);
}
console.log(homes);
for(let i = primedLength -1; i > -1; i--) {
homes.shift()
}
console.log(homes);
//Is there a better, third solution without a placeholder array and involving only one for loop?

//Exercise 4: Find the Largest Number
const arrayOfNumbers = [10,2,32,90,11,99,444,4];
for(let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > arrayOfNumbers[i+1])
  {arrayOfNumbers.push(arrayOfNumbers[i]);
  arrayOfNumbers.shift();
  arrayOfNumbers.shift();}
  else while (arrayOfNumbers.length > 1)
  {arrayOfNumbers.shift();}
  }

console.log(arrayOfNumbers);

//Exercise 5

let people = ["John","Bill","Jane"];
function greetUsers(users) {
  for (i = 0; i < users.length; i++){
    console.log(`Hello, ${users[i]}!`);
  }
}

greetUsers(people);
