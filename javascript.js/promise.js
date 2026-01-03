//  promise
//synchronous line by line  javascript is synchronous programming language
// asynchronous
//promise  le synchronous code lie asynchronus banauxa
//promise ko 3 state hunxa resolve, reject & pending
// pending case net bat padhne
 

// const p=new Promise((resolve, reject) => {
//   let isRead = true ;
//  if(isRead) {
//   resolve("found data");
//  } else {
//   reject("data not found");
//  }
// });
// p.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// })

//JSON = Javascript Object Notation 
// ---String ko form ma database me store hunxa and light weight || univerasal programing language

// const jData={
//     "name":"pramod",
//     "age":20
// }

// const user={
//     name:"ram",
//     age:20
// }

// console.log(user)

// const jdata=JSON.stringify(user)
// console.log(jdata)
// console.log(JSON.parse(jdata))  //// JSON string convert to ORIGINAL fFORM 


// user.json()  and JSON.parse(jdata)


// protocal= http
// GET(read),POST(create),Delete,put/patch(update)
// -- put single data /patch multiple data


// // Old code ko lagi 

// let res = fetch("http://dummyjson.com/products",{
//   method: "GET",
// });
// res.then((data) => {
//   return data.json()
// }).then((data)=>{

//   console.log(data.products)
// })
// .catch((err)=>{
//   console.log(err);
// });

//async-await use

// const getProduct=async()=>{    ////async vanxa asynchronous ho

// try {
//    let res =await fetch("http://dummyjson.com/products",{
//   method: "GET",
// });

// res = await res.json();
// console.log(res.products);
  
// } catch (error) {
//   console.log(error);
  
// }
// };
// getProduct();


// 1. wrt a function that will calculate the total number of quantity of all products

// async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const totalQuantity = data.products.reduce((acc, item) => {
//       return acc + item.stock;
//     }, 0);

//     console.log("Total Quantity:", totalQuantity);

//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getUsers();

//2. wrt a function that will calculate the total price all product

//  async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const totalPrice = data.products.reduce((acc, item) => {
//       return acc + item.price;
//     }, 0);

//     console.log("Total Price:", totalPrice);

//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getUsers();

//3. wrt a function that will find out more  than 5000 product price 

// async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const morePrice = data.products.filter((item) => {
//       return item.price > 2400 ;
//     });

//     console.log("Products with price > 2400:", morePrice);

//   } catch (error) {
//     console.log("Error:", error);
    
//   }
// }

// getUsers();


//4. wrt a function that will  print the price of beauty.
// async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const beautyPrices = data.products
//     .filter(item =>  item.category === "beauty" )
//     .map((item) =>  item.price );
      


//     console.log("Price of beauty products:",beautyPrices);

//   } catch (error) {
//     console.log("Error:", error);
    
//   }
// }

// getUsers();

//5. wrt a function that will  calculate  the total  price of abc.

// async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const totalBeautyPrice = data.products
//     .filter(item =>  item.category === "beauty" )
//     .reduce((acc, item) =>  acc + item.price , 0);
      
//     console.log("Total Price of beauty products:",totalBeautyPrice);

//   } catch (error) {
//     console.log("Error:", error);
    
//   }
// }

// getUsers();



















