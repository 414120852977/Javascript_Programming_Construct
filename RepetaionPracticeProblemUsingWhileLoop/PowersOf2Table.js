const prompt = require("prompt-sync")();
let number = prompt("enter a number to calculate table");
let power = 1;
let num = 1;

     while(num <= number)
    {
        power = power * 2;
        console.log(power);
         if(power == 256) 
        break;
    }
    num++;
   
    

    