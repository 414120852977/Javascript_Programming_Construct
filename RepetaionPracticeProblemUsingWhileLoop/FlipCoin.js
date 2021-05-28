
let num = 1;
while(num <= 11)
{
    let flipCheck = Math.floor(Math.random()*2);
    switch (flipCheck) {
        case 0:
        console.log("head wins");
            break;
        case 1:
        console.log("tails wins");
        default:
            break;
    }
    num++;
}
