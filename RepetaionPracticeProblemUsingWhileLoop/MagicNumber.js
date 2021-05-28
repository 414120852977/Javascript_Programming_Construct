const prompt = require("prompt-sync")();
let number = prompt("enter a number between 1 to 100");
let num = 50;
while (number > 0) {
    if (number >= num) {
       console.log("number is greater"); 
       for(let i = number; i <= number; i++ ) {
           console.log("reached"+i);
       }
    }
    else if (number <= num) {
        console.log("number is smaller"); 
         for(let i = number; i <= number; i++ ) {
           console.log("reached"+i);
       }
    }
    break;
}