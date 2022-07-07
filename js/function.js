// window.onload =function(){
//     let c=document.getElementById("celsius");
//     let f=document.getElementById("fahrenheit");
//     c.oninput=function() {
//         f.value=(c.value*9/5)+32
//     }
//     f.oninput=function(){
//         c.value=(f.value-32)*5/9
//     }
// }

// var f = [];
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   return f[n] = factorial(n-1) * n;
// }
// program to find the factorial of a number


// //multiplication table
// let num=prompt("Enter a number");
// document.write("multiplication of "+num+" from 0 times 12:");
// let i=0;
// while (i<=12){
//     document.write(i+"X"+ num +"="+i*num +"<br>");
//     i++
// }
// let j=1;
// for (k=1; k<10; k++) {
//    console.log( j+=k)
// }
// var even=prompt("Enter a Number:");
// function isEven(num){
//     if (num%2===0){
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// isEven(even);

// function isEven(num){
//     return num %2 === 0;
// }


// var number = parseInt(prompt('Enter a number: '));
// if (number < 0) {
//     console.log('Error!!!');
// }
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }
// else {
//     let factorial = 1;
//     for (i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     console.log(`The factorial of ${number} is ${factorial}.`);
// 
// var btn=document.getElementById("btn")
// var g=0;
// var h1=document.getElementById("head")
// btn.addEventListener("click",function(){
//     g++;
//     h1.innerHTML=g
// })
// var body=document.querySelector("body")
// var ispink=false;
// btn.addEventListener("click", function(){
//          if (ispink){
//             body.style.backgroundColor="white"
//          }
//          else{
//             body.style.backgroundColor="orange";
//          }
//          ispink= !ispink 
//      })
var button=document.getElementById("myBtn");
var tole=document.getElementById("Happy");
function toggle(){
    tole.classList.toggle("happiness")
}
button.addEventListener("click",toggle)