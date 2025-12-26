// function

// function addTwo(){
//   console.log("addTwo")
//   return 1
// }
// addTwo()

// let x=addTwo()
// console.log("x")

// function add(a,b,c){
//   // console.log(a+b+v=c)
//   return a+b+c
// }
// let sum=add(1,2,5)
// let sum1=add(100,33,44)
// console.log(sum)
// console.log(sum1)

// subtract
// function add(a,b,c){
//   // console.log(a+b+v=c)
//   return a-b-c
// }
// let sum=add(1,2,5)
// console.log(sum)

// multiply
// function add(a,b){
//   // console.log(a+b+v=c)
//   return a*b
// }
// let sum=add(2,2)
// console.log(sum)

// Divide
// function add(a,b){
//   // console.log(a+b+v=c)
//   return a/b
// }
// let divide=add(8,2)
// console.log(divide)

// wrt a function that will tell given number or pass number even or odd

// function evenOrOdd (num) {
//   if(num % 2 == 0) {
//     console.log("even")

//   } else {
//     console.log("odd")
//   }
// }

// evenOrOdd(8)

// that will print 1 to nth number
// function printNth(num){
//   for (let i=1; i<= num; i++){
//     console.log(i);
//   }
//   }

// printhNth(8);

// types

// 1.Named function

// function add(){

// }

// 2,Arrow function

// const add=()=>{
// }

// const add = (a,b) => {
//   console.log(a+b);
//   return a+b;
// };

// const add = (a,b) => a + b;

// const add = a => a+5;
// console.log(add(2));

// iif
// (function(){
//   console.log("hello")
// })()

// inner function

// function outer(){ // outer
//   function inner(){  // inner
//     console.log("inner")
//   }
//   return inner
// }

// const inner = outer();
// inner()

// CallBack function

// const first=()=>{
//   console.log("firsr")
// }

// const second = (f,x) => {
//   f(x);
//   console.log("second");
// };
// second(
//   (a) => {
//     console.log("first",a)
//   },100
// );

// wt a function that accpt  fun and num callback ident num odd and even

// const evenOrOdd = (fx,num) => {
//   fx(num);
// };

// evenOrOdd((n) => {
//   if(n%2==0){
//     console.log("even");
//   }else {
//     console.log("Odd")
//   }
// } ,101 )

// setInterval (()=> {
//   console.log("setInterval")
// },500)

// const add =(x, y= 1 ) => {
//   console.log(x+y)
// };
// add(100, 200);

// thet will print even numbers from 1 to nth natural number

// function evenNth(num) {
//   for(i=1; i<=num; i++) {
//     if(num % 2 == 0)  {
//       console.log("even")
//     }

//   }

// }
// evenNth(8)

// same sum

// function printEven(num) {
//   let sum = 0;
//   for(i=1; i<=num; i++) {
//     if(i%2==0) {
//       // console.log(i)
//       sum = sum + 1;  // =2+2 = 6
//     }
//   }
//   console.log(sum);
// }
// printEven(10)

// factorial 5!
// function calculateFactorial(num) {
//   let fact=1;

//   for(let i=1; i<=num; i++){
//     fact = fact * i;
//   }
//   console.log(fact);
// }

// calculateFactorial(5)

// prime number or not
// function isPrime(num) {
//   let prime = true;

//   for(let i=2; i<num; i++) {
//     if(num%i ==0) {
//       let prime = false;
//       break;
//     }
//   }

//   if (prime) {
//     console.log("prime");
//   } else{
//     console.log("Not prime")
//   }
// }
// isPrime(7);
