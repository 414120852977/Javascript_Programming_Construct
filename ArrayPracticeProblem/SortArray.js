
let a = Math.floor(Math.random()*899+100);
console.log(a);
let b = Math.floor(Math.random()*899+100);
console.log(b);
let c = Math.floor(Math.random()*899+100);
console.log(c);
let d = Math.floor(Math.random()*899+100);
console.log(d);
let e = Math.floor(Math.random()*899+100);
console.log(e);
let f = Math.floor(Math.random()*899+100);
console.log(f);
let g = Math.floor(Math.random()*899+100);
console.log(g);
let h = Math.floor(Math.random()*899+100);
console.log(h);
let i = Math.floor(Math.random()*899+100);
console.log(i);
let j = Math.floor(Math.random()*899+100);
console.log(j);
let array=[a, b, c, d, e, f, g, h, i, j];
console.log(array);
// sorting array by usig sort method
let sortArray = array.sort();
console.log(sortArray);
let largestNumber = array[0];
let smallestNumber = array[0];
let secondLargestNumber = array[0];
let secondSmallestNumber = array[0];
for (let i=0; i<array.length; i++){
if(array[i] > largestNumber){
    secondLargestNumber =largestNumber;
    largestNumber = array[i];
}else if (array[i] > secondLargestNumber && array[i]!=largestNumber ){
    secondLargestNumber = array[i];
}
}
console.log("Largest Number ->" +largestNumber);

console.log ("Second Largest Number ->" +secondLargestNumber);

for (let j=0; j<array.length; j++){
    if(array[j] <smallestNumber){
        secondSmallestNumber =smallestNumber;
        smallestNumber = array[j];
    }else if (array[j] < secondSmallestNumber){
        secondSmallestNumber = array[j];
    }
    }
    console.log("Smallest Number ->" +smallestNumber);
    
    console.log ("Second Smallest Number ->" +secondSmallestNumber);
