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