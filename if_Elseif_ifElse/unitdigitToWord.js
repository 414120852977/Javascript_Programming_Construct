const prompt = require("prompt-sync")();
let number = prompt("entere a unit digit number like 1,10,100,1000");
if (number == 1) {
    console.log("one")
}
else if (number == 10) {
    console.log("ten");
}
else if (number == 100) {
    console.log("hundred");
}
else if (number == 1000) {
    console.log("one thousand");
}
else {
    console.log("you entered wrong unit place ");
}