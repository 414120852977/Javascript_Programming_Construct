const prompt = require("prompt-sync")();
let number = prompt("enter a number");
let fact = 1;
for(let i = 1; i <= number; i++) {
    fact = fact * i;
}
console.log(fact);
