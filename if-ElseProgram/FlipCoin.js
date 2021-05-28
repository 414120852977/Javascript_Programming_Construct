const prompt = require("prompt-sync")();
let flipCoin = Math.floor(Math.random()*2)+0;
if(flipCoin == 1) 
    console.log("head")
    else 
    console.log("tail")