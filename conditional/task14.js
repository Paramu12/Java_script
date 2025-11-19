let data=function(sum){
    let sumOfSquares=0
    for (let i = 1; i <= 100; i++) {
    sumOfSquares += i * i;
    sum += i;
}

let squareOfSum = sum * sum;

let difference = squareOfSum - sumOfSquares;
return difference
}
let a=data(0)
console.log(a)