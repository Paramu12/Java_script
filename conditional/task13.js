let data=function(sum){
   for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i)
        sum =sum+ i;
    }
}
 return sum
}
let a=data(0)
console.log("a",a)