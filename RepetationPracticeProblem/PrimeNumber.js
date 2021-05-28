const prompt = require("prompt-sync")();

let number = prompt("enter a number");
number = Number (number);
let count = 2;

    if(number % count == 0) {
    console.log("it is  a prime number");
    } else {
    console.log("it is not prime");
    }


