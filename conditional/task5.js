//Assign grade of marks A+ above 90;B(80-89) C(70-79) D(60-69) E(50-59) F below50
let a=65
if(a>=90)
{
  console.log("A+ grade")
}
else if((a>=80)&&(a<90)){
  console.log(" B grade")
}
else if((a>=70)&&(a<80)){
  console.log("C grade")
}
else if((a<70)&&(a>=60)){
  console.log("D grade")
}
else if((a<60)&&(a>=50)){
  console.log("E grade")
}
else{
  console.log("F grade")
}
//expected output
//D grade