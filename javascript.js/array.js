// Array

// let arr=[100,2,3,4,5,6,7]
//0-6 index
// 7 length

// console.log(arr.length-1);
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[arr.length-1])

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//   // console.log(arr[i])
//   sum = sum + arr[i];
// }
// console.log(sum)

// even number
// for (let i=0; i<arr.length; i++){
//   if(arr[i] % 2 ==0){
//     console.log(arr[i])
//   }
// }

// for (let i=arr.length-1; i>=0 ; i--) {
//   console.log(arr[i])
// }

// let sum = 0;
// for (let i=0; i<arr.length; i++){
//     if(arr[i] % 2 ==0){
//       // console.log(arr[i])
//       sum = sum + arr[i];
//     }
//   }
//   console.log(sum)

// Array method
// let arr = [1,2,3,4,5]
// arr.push(100)
// arr.push(200,300,400)

// console.log(arr.pop());
// console.log(arr.pop());

// arr.unshift(900,800)
// console.log(arr.shift()) //element are first shift
// console.log(arr.shift())
// console.log(arr);

// let arr = [1,2,3,4,5]
// slice
// console.log(arr.slice(1,4)) //4- one less
// console.log(arr.slice(2,4))
// console.log(arr.slice(1))

// splice
// let arr = [1,2,3,4,5]
// // console.log(arr.splice(1,4))  // only delete
// console.log(arr.splice(1,2, "hello")) // add these index whose delete
// console.log(arr);

// concat method      // add two and more array
// let arr = [1,2,3,4,5]
// let arr2 = [100,200,300]
// let arr3 = [400,500]

// console.log(arr.concat(arr2,arr3));

// map, filter, reduce, foreach, find, includes  ///
// let arr = [1,2,3,4,5]
// // foreach /////not return any
// // -access and print


// forEach
// arr.forEach((item,index)=>{     // callBack func for loop  is not use
//   console.log(item+"_"+index)
// })

// Map
// -New array returns
// modified existing array and returns new array

// let arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((item) => {
//   // return item * 50
//   // return item + 100 
//   return item %2
// });
// console.log(newArr);

// filter   -- item chhannu  // do not use modified array

// let arr = [1, 2, 3, 4, 5]

// const filterItems=arr.filter((item)=>{
//   // return item%2==0
//   // return item%2!==0
//   // return item>3

// })
// console.log(filterItems)


////Reduce
// reduce -- calculation use -- single value return to use only

// let arr = [1, 2, 3, 4];

// let totalVal = arr.reduce((acc, item) => {
//   return acc+item

// },0)                    // not pass 0 then result->1 automatic pass -- only use 0 why- object {} not support
// console.log(totalVal)


////find    // value search

// let arr = [1, 2, 3, 4];

// const i=arr.find((item)=>{
//   return item == 3
// })
// console.log(i)

////includes   // not use callback func

// let arr = [1, 2, 3, 4];

// console.log(arr.includes(1))
// console.log(arr.includes(2))
// console.log(arr.includes(3))
// console.log(arr.includes(5))

// array object 
// array strings
