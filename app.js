var num =[];
for
 (let i = 1; i < 101; i++) {
  num.push(i);
}


function homewk(){
  for
  ( var num = 1; num < 101; num++) {
   if (num % 15 ==0){
     console.log("Fizz Buzz")
   } else if 
   (num % 5==0) {
     console.log("Buzz")
   } else if 
   (num % 3==0) {
     console.log("Fizz")
   } else {
     console.log(num)
   }

 }  
}
homewk()