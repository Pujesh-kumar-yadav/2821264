// class  class is a blueprint of an object
// constructor special type of method  // object create
// object
//this current object chinnu

// dry-principle
// dry=do not repeat yourself

// object
// class User {
//   constructor(userName, userPhone) {
//     this.name = userName;
//     this.phone = userPhone;
//   }

//   walk = () => {
//     console.log("walk");
//   };

//   info = () => {
//     console.log(this.name);
//     console.log(this.phone);
//   };

// }
// const U1 = new User("ABC", "9859565");
// const U2 = new User("xyz", "98125667");

// U1.info();

// console.log(U1);
// U1.walk()
// console.log(U1.name)
// console.log(U1.phone)

// inheritance   //// class 
// super parent lie call garnu

// class Person {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;

//   }
// }
// class Student extends Person {
//   constructor(name,age,roll_no){
//     super(name,age);
//     this.roll_no = roll_no;
//   }
// }
// class Emp extends Person {
//   constructor(name, age, dept){
//     super(name, age);
//     this.dept = dept;
//   }
// }

// const s1=new Student("ABC",30,2)
// console.log(s1)
// const e1=new Emp("XYZ",60,"IT")
// console.log(e1)

// export 

//error handling
// promise -fetch , async , await
// dom and event

// 1. Create a Simple Class:
// - Write a code to create a class `Person` with a constructor that initializes `name` and `age` properties
// class Person{
//   constructor( name , age){
//     this.name = name;
//     this.age = age;
//   }
// }
// const s1 = new Person("PKY",30)
// console.log(s1);

// 2. Add Method to Class:
// - Write a method inside the `Person` class to return a greeting message like "Hello, my name is [name]".
// class Person{
//     constructor(name ){
//       this.name = name;
//     }

//     walk () {
//       return `Hello, my name is ${this.name}`;
//     }
//   }
//   const s1 = new Person("PKY");
//   console.log(s1.walk());   

// 3. Instantiate a Class:
// - Write a code to create an instance of the `Person` class with `name` "John" and `age` 30, and call the greeting method.
// class Person {
//   constructor(name , age){
//     this.name = name;
//     this.age = age;
//   }

//   greet () {
//     return `${this.name}, ${this.age}`;
//   }
// }
// const s1 = new Person("John", 30)
// console.log(s1.greet());

// 4. Class Property Initialization:
// - Write a class `Car` with `make` and `model` properties initialized in the constructor.
// class Car {
//   constructor(make , model){
//     this.make = make;
//     this.model = model;
//   }
// }
// const c1= new Car("Tyota" , "Corolla")
// console.log(c1);



// Arrow Functions

// 5. Basic Arrow Function:
// - Write an arrow function that takes two numbers as parameters and returns their sum.
// const add = (a , b) => {
//   return a + b ;
// }; 
// console.log(add(5 , 5));

// 6. Arrow Function with Default Parameter:
// - Write an arrow function that takes a number and returns its square, with a default parameter of 2 if no argument is provided.
// const square = (item = 2) => {
//   return item * item;
// }
// console.log(square());
// console.log(square(3));
  
// 7. Arrow Function with No Parameters:
// - Write an arrow function that returns a string "Hello, World!" with no parameters.
// const string = () => {
//   return "Hello , World!"
// }
// console.log(string());

// 8. Arrow Function with Object Return:
// - Write an arrow function that returns an object with properties `name` and `age`.
// const Person = (name , age) => {
//   return {name:name, age:age};
// }

// console.log(Person("PKY", 30));


