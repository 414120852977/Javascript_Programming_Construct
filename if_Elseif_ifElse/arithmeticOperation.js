const prompt = require("prompt-sync")();
let a = prompt("enter a first number");
let b = prompt("enter a second number");
let c = prompt("enter a third number");
let result1 = a+b*c;
let result2 = a%b+c;
let result3 = c+a/b;
let result4 = a*b+c;

if(result1 > result2 && result1 > result3 && result1 > result4)
console.log(result1+ " is maximum");
else if(result2 > result3 && result2 > result4)
console.log(result2+ " is maximum");
else if(result3 > result4)
console.log(result3+ " is maximum");
else
console.log(result4+ " is maximum");

