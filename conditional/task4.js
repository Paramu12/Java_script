/*check if the number is divisible by 3 and 5
let x=15
 if((x%3===0)&&(x%5===0)){
    console.log("the number divisible by 3 and 5")
 }
 else{
    console.log("not divisible by 3 and 5")
 }
 expected output
 the number divisible by 3 and 5*/
let sum = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum =sum+ i;
    }
}

console.log(sum)














