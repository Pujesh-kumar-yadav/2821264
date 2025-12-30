// object is collection of key value pairs

// let user = {
//   [key]:value,
//   [key]:value,
//   [key]:value,
// }

// CURD = Create Updare, read(get,fetch),delete
// create
// let user = {
//     name:"abc",
//    roll:10,
//    isStudent:true
//   }
//   console.log(user)

// read
// console.log(user.name)
// console.log(user.roll)
// console.log(user.isStudent)
// console.log("--------")
// console.log(user.isStudent)
// console.log(user.name)
// console.log(user.roll)

// delete
// delete user.name
// console.log(user)

//update or add

// let user = {
//   name: "abc",
//   roll: 10,
//   isStudent: true,

//   // name = "xyz"
// };

// // add
// user.phone = 9474737;

// //update
// user.name = "xyz";
// console.log(user);


let user = {
  name: "abc",
  roll: 10,
  isStudent: true,

  phone:{
    p1:95753,
    p2:77888
  },
  marks: [30, 50, 50,40.90]

};

// console.log(user.phone.p1)
// console.log(user.phone.p2)
// console.log(user.phone.p1)
const totalValue = user.marks.reduce((acc, item)=>{
  return acc+item;
},0);
console.log(totalValue);


