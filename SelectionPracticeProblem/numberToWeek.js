const prompt = require("prompt-sync")();
let number = prompt('enter a number')
if (number == 0) {
    console.log('sunday');
}
else if (number == 1) {
    console.log("monday");
}
else if (number == 2) {
    console.log("tuesday");
}
else if (number == 3) {
    console.log("wenesday");
}
else if (number == 4) {
    console.log("thursday")
}
else if (number == 5) {
    console.log("friday");
}
else if (number == 6) {
    console.log("saturday");
}
else {
    console.log("you entered wrong number please enter in range o to 7");
}
