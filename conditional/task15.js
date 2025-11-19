let data=function(sum){
  let n1
  let n2
  let add

     for(let i=0;i<=4000000;i++) {
      if(i%2===0){
        sum=sum+i
      }
     }  
      add=n1+n2 
      n1=n2
      n2=add
      return sum
}

let a=data(0)
console.log(a)


