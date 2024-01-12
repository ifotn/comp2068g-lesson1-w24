let fs = require('fs');

// read & display food
fs.readFile('food.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fileContents);
        console.log('We ate this');
    }
});


// read & display drinks
fs.readFile('drinks.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fileContents);
    }
});
console.log('We drank this');