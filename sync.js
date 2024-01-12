// import filesystem module
let fs = require('fs');

// read & display food
let food = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('We ate this');

// read & display drinks
let drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('We drank this');