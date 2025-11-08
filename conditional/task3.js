//calculate the discount based on purchase eg if he brought above 1000 gave 10% as discount.5000 15% as discount.10000 20% as discount.
let a=1200
let discount
if((a>=1000)&&(a<5000))
{
 discount=a*0.1
  console.log(discount,"10%discount")
}
else if((a>=5000)&&(a<10000)){
  discount=a*0.15
  console.log(discount,"15%discount")
}
else if(a>=10000){
  discount=a*0.2
  console.log( discount,"20%discount")
}
//expected output
//120 10%discount