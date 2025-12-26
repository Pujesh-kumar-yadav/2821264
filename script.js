// console.log(1)
// alert("Hello this is js class")
// document.writeln("Hello this js class")
// userName=prompt("Enter your name")
// console.log(userName)
// document.writeln(userName)
// alert(userName)
// js
// Variable and rules
// let, var, const
// data type
// op
// if
// loop
// html+css+js

// Variable and rules
// val=10
// console.log(val)
// fullName
// full_name
// _,$,char,number,
// 1num=100  // not allowed
// num1=100
// n1um=100
// $num=10
// _name="ram"
// data type

// primitive
//   num ="Hello"
// 1.String
// fullName='sipalayas info tech'
// fullName="sipalaya's info tech"
// fullName = `sipalaya
// info
// tech`;

// console.log(typeof fullName);

// 2.Number
// 0-9
// num =10
// num =10.4
// num =10.49869
// console.log(typeof num)
// console.log( num)
// 5.Boolean
// true and false
// isAdmin=true
// isAdmin=false
// console.log(typeof isAdmin)

// 3.undefined
// var num=null   // empty
// console.log(num)
// console.log(typeof num)
// var num2;   //empty
// console.log(num2)
// console.log(typeof  num2)
// var user=null
// var num;
// 4.null
// 6.BigInt
// var num=12323334343434349898998n
// var num=BigInt(12323334343434349898998n)
// console.log(typeof num)
// 7.Symbol
// var a=10
// var b=10
// console.log(a==b)
// var id1=Symbol("ram")
// var id2=Symbol("ram")
// console.log(id1==id2)
// console.log(typeof id1)

// Non-primitive
// object
// var user={
//     name:"ram",
//     age:10
// }
// var user2={
//     name:"ram",
//     age:10
// }
// console.log(101==102)
// console.log(  typeof user)
// // Array
// const arr=[11,2,3,4,5,6,7]
// console.log(arr)
// console.log(  typeof arr)
// arr={
//     0:11,
//     1:2,
//     2:3
// }
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// function
// block of code that perform specific task
// function add(){
//     console.log("add")
// }
// add()
// console.log(add)
// console.log( typeof  add)
// Date
// const date=new Date()
// console.log(date)
// console.log(  typeof date)

// var,let, const   2015
// var a=10
// var a="hello"
// var a=true

// var dob = 2055;
// var dob = 2021;
// dob=2089

// global scoped

// var a=10
// {
//     var a=10
//     console.log(a)
//     // a=20
// }
// console.log(a)
// console.log(dob);
// const
// const PI=3.14
// PI=5
// {
//     const x=100
//     const x=200
//     console.log(x)
// }
// console.log(x)
// let
// let x=10
// x=200
// // let x=500
// {
//  let a=100
//  console.log(a)
// }
// console.log(a)

// Hoisting
// console.log(x)
// var x=10
// console.log(a)
// const  a=10
// console.log(x)

// Operators
// 1.Arithmetic Operators
// +,-,/,%,,*,++,--
// console.log(10+20)
// console.log(10-20)
// console.log(10/20)
// console.log(10%20)
// console.log(10*20)
// console.log(2**3)
// let x=10
// console.log(x++)
// console.log(x--)
// console.log(++x)
// console.log(--x)
// console.log(x)
//2. Assignment Operators
// =,+=,-=,/=,%=,=,*=
// let x = 10;
// x += 5; //x+5
// console.log(x);
// x -= 5; //x+5
// console.log(x);
// x *= 5; //x+5
// console.log(x);
// x /= 5; //x+5
// console.log(x);
// x %= 5; //x+5
// console.log(x);
// x **= 5; //x+5
// console.log(x);

// 3.Comparison Operators (true or false )
// ==,===,>,<,>=,<=,!=,!==
// let x=4
// let y="4"
// console.log(x===y)
// console.log(x==y)
// console.log(x>y)
// console.log(x<y)
// console.log(x>=y)
// x is greater than y or x is equal to Y
// console.log(x<=y)
// true +false = true
// false + false =false
// console.log(x!=y)
// console.log(x!==y)
// 4.Logical Operators (true or false )

// and (&&)or (||)

// cond1  && cond2
// true && true=true
// true && false =false
// false && true=false
// false && false=false
// or
// cond1  || cond2
// true && true=true
// false && true=true
// false && false=false
// true && false=true
// let x=10
// let y=20
// console.log(x<y && y>x)
// console.log(x>y && y<x)
// console.log(x<y && y<x)
// console.log(x<y || y<x)
// console.log(x>y || y>x)
// Not(!)
//  let isAdmin=false
//  console.log(!isAdmin)

// type Casting
// console.log(true+1)
// console.log(false*1+true+5)
// console.log(false+"hi"+1+true)
// console.log(false+1+true+"hi")

// string to number
// let num = "10";
// console.log(typeof num);
// num=Number(num)
// num = parseInt(num);
// console.log(typeof num);
// console.log(num)
// let num=977
// console.log(typeof num);
// num =String(num)
// console.log(typeof num);

// string or number , empty to Boolean
// let x='ljfvbi'
// 0, null , undefined, empty, false =false

// let x=-5
// console.log(Boolean(x))

// if_else
// if(true){
//     console.log("if")
// }else{
//     console.log("else")
// }

// let age = 2;
// if (age > 50) {
//   console.log("old");
// } else if (age == 20) {
//   console.log("20");
// } else {
//   console.log("Child");
// }



// switch
// let char = "D"

// switch (char) {
//   case "A": {
//     console.log("A");
//     break;
//   }

//   case "B": {
//     console.log("B");
//     break;
//   }

//   case "C": {
//     console.log("C");
//     break;
//   }

//   case "D": {
//     console.log("D");
//     break;
//   }

//   case "E": {
//     console.log("E");
//     break;
//   }

//   default:{
//     console.log("default");
//   }

// }













































// Check even or odd
// let num=11;
// if(num % 2 == 0) {
//   console.log("even")
// } else{
//   console.log("odd")
// }

// Check if a number is positive, negative, or zero
// let num = 4;
// if(0<num) {
//   console.log("positive")
// } else if (0>num) {
//   console.log("negative")
// } else {
//   console.log("zero")
// }

// Check voting eligibility
// let age = 5;
// if(age>=18){
//   console.log("eligible")
// } else{
//   console.log("not eligible")
// }

// Find the largest of two numbers
// let
// a = 15;
// b = 10;
// if(a>b){
//   console.log("largest")
// } else {
//   console.log("smallest")
// }

// Grade calculation
// let marks = 95;
// if(marks >=90){
//   console.log("A")
// } else if (marks >=80){
//   console.log("B")
// } else if (marks >=70){
//   console.log("C")
// } else{
//   console.log("Fail")
// }

// Check password
// let password="admin@123";
// if(password=== "admin@123"){
//   console.log("login succesfully")
// } else{
//   console.log("wrong password")
// }

// Simple login check
// let username = prompt("Enter your user name");
// let password = prompt("Enter your password");
// if(username === "nimesh" && password=== "Pujesh@122") {
//   console.log("logged sucessfully");
// } else{
//   console.log("username or password not match")
// }

// check vowel consonant
// let ch = prompt("Enter a letter:");
// if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//   alert(" letter is vowel");
// } else {
//   alert("letter is consonant");
// }

// Check divisible by 5 and 11
// let  num=prompt("Enter your number");
// if(num % 5==0 && num % 11==0 ) {
//   console.log("Divisible by 5 and 11")
// } else{
//   console.log(" not divisible")
// }
