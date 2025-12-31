//string  collection of charcter or coteson
// let fullName = "sipalaya info tech"
// console.log(fullName.length)
// console.log(fullName[2])

// for(let i=0; i<fullName.length; i++){
//   console.log(fullName[i]);

// }

// for(let i=fullName.length-1; i>0; i--){
//     console.log(fullName[i]);

//   }

// let fullName = 'sipalaya info tech'
// let lastName = "hello"
// // console.log(fullName+" "+lastName);
// console.log(fullName.concat(" "+lastName));

//toUpercase
//toLowercase

// let fullName = '  Sipalaya info tech  '
// console.log(fullName.toLowerCase());
// console.log(fullName.toUpperCase());

// console.log(fullName.startsWith("S"));
// console.log(fullName.startsWith("Sipalaya"));
// console.log(fullName.endsWith("h"));
// console.log(fullName.endsWith("tech"));
// console.log(fullName)
// console.log(fullName.trim())

// //replaceMethod
// let fullName = 'Sipalaya info tech'
// console.log(fullName.replace("S","Y"))
// console.log(fullName.replace("Sipalaya","Y"))
// console.log(fullName.replace("a","M"))
// console.log(fullName.replaceAll("a","O"))

// slice // tukraune  ///splice is not mutable becuse not use
// let fullName = 'Sipalaya info tech'
// console.log(fullName.slice(0,8))
// console.log(fullName.slice(9,13))
// console.log(fullName.slice(14,18))

//chartAt
// console.log(fullName.charAt(1))

//split  // most use
// let fullName = 'Sipalaya info tech'
// console.log(fullName.split())
// console.log(fullName.split(''))
// const charAt = fullName.split(' ')
// console.log(charAt[0])
// console.log(charAt[1])
// console.log(charAt[2])
//shortcut method
// console.log(fullName.split(" ")[0])
// console.log(fullName.split(" ")[1])
// console.log(fullName.split(" ")[2])

//task
// backend ma use hold- means barrer
// let token ='hello 2fjiofsfafofagohogogghhglaslghgasliaslaliisifiifiififiifif'
// console.log(token.split(" ")[1])
//palindrome string, number 121
// let name="radar"

// // let x="ram"
// let rev=''
// for(let i=name.length-1; i>=0; i--){
//   rev = rev+name[i];
// }
// // console.log(rev)
// if(name==rev){
//   console.log("Pal")
// } else{
//   console.log("not")
// }
// react use conditional split etc
// let country ='india'
// // console.log(country.replace("n","N")) // not best for use
// console.log(country[0].toUpperCase()+country.slice(1))

////task
// 1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`.
// let str = 'Hello EveryOne'
// count = 0;
// for(let i=0; i<str.length; i++){
//   if(str[i].toLowerCase() === 'e'){
//     count++;
//   }
// }
// console.log(count);

// 2. Create a program that checks if a string starts with the letter 'H' and ends with the letter 'e'. Use `if-else` statements.
// let str = 'Hello EveryOne'
// if(str.startsWith("H") && str.endsWith("e")){
//   console.log("Found at start with 'H' and ends with 'e'")
// } else {
//   console.log("Found not start with 'H' and ends with 'e'")
// }

// 3. Write a program that loops through a string and prints only the uppercase letters.
//  let str = 'Hello EveryOne'
//  for(let i=0; i<str.length; i++){
//   if(str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()){
//     console.log(str[i]);
//   }
//  }

// 4. Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given string.
// let str = " Hello Pujesh , Hello World , Hello Everyone";
// let newstr = "";

// for (let i = 0; i < str.length; i++) {
//   if (str.substring(i, i + 5) === "Hello") {
//     newstr += "Hi";
//     i = i + 4; // skip "Hello ki baki character skip"
//   } else {
//     newstr += str[i]; // agar hello nahi mila toh char ko ose hi jod dau
//   }
// }
// console.log(newstr);

// 5. Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`.
// let str = 'Hello Everyone'
// let count = 0;
// for(let i = 0; i < str.length; i++) {
//   let ch = str[i].toLocaleLowerCase();
//   if(ch ==='a' || ch ==='e' || ch ==='i' || ch ==='o' || ch ==='u' ){
//     count++;
//   }
// }
// console.log("Number of vowels:", count);

// 6. Write a program that uses a loop to concatenate the first letter of each word in the string `"Hello EveryOne"` to form a new string.
// let str = 'Hello Everyone'
// let newStr = "";

// for(let i = 0; i < str.length; i++) {
//   if(i === 0 || str[i - 1] === " ") {  //// str[i-1] space paxi aaune letter
//   newStr += str[i]
//   }
// }
// console.log(newStr);

// 7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `if- else` statements.
// let str = 'beeb'
// let newStr = ''
// for(i=str.length-1; i>=0; i--){
//   newStr += str[i]
// } 
// if(str === newStr){
//   console.log("pal")
// } else {
//   console.log("Not pal")
// }

// 8. Write a program that trims any extra spaces at the beginning and end of a string and then checks if the string is empty.
// let fullName = "  sipalaya info tech  " 
// let trimmedName = fullName.trim();
// if(trimmedName === "") {
//   console.log("String is empty")
// } else {
//   console.log("String is not empty")
//   console.log(trimmedName)
// }

// 9. Using a loop, write a program that converts every letter in a string to lowercase if it’s uppercase, and to uppercase if it’s lowercase.
// let str = " Hello Pujesh , Hello World , Hello Everyone";
// let newStr = ''
// for(let i=0; i<str.length; i++){
//   let ch = str[i];
//   if(ch >= 'A' && ch <= 'Z'){
//     newStr += ch.toLowerCase();
//   } else if (ch >= 'a' && ch <= 'z'){
//     newStr += ch.toUpperCase();
//   } else {
//     newStr += ch;  // space, comma,
//   }
// }
// console.log(newStr);

// 10. Write a program that slices the first 5 characters of a string and checks if this substring is equal to `"Hello"`.
// let str = "Hello Everyone";
// let subStr = str.slice(0, 5);

// if (subStr === "Hello") {
//   console.log("Substring is equal to Hello");
// } else {
//   console.log("Substring is NOT equal to Hello");
// }
// console.log("Sliced substring:", subStr);

// 12. Write a program that checks if a string contains the word `"Hello"` using `if-else` statements. If it does, replace it with `"Hi"`.
// let str = "Hello Everyone";

// if(str.includes("Hello")) {
//   str = str.replace("Hello", "Hi");
//   console.log("Updated string:", str)
// } else{
//   console.log("Hello not found in the string");
// }

// 13. Using a loop, write a program that counts the number of spaces in the string `"Hello EveryOne"`
// let str = 'Hello Everyone'
// let count = 0;
// for(let i=0; i<str.length; i++){
//   if(str[i] === " "){
//     count++;
//   }
// }
// console.log("Number of spaces:", count);

// // 14. Write a program that checks if the length of a string is greater than 10. If it is, print the string in uppercase; otherwise, print it in lowercase.
// let str = "Hello Pujesh , Hello World , Hello Everyone";
// if(str.length > 10){
//   console.log(str.toUpperCase());
// } else {
//   console.log(str.toLowerCase());
// }

// 15. Create a program that loops through a string and prints the index of each letter 'o' in the string `"Hello EveryOne"`.
// let str = "Hello Everyone"
// for(let i=0; i<str.length; i++){
//   if(str[i].toLowerCase() === 'o'){
//     console.log("Index of o:", i);
//   }
// }

// 16. Write a program that trims a string, then checks if its length is even or odd using `if-else` statement
// let fullName = '  Sipalaya info tech '
// let newStr = (fullName.trim());
// if(newStr.length % 2 ==0 ){
//   console.log("even")
// } else {
//   console.log("odd")
// }

// 17. Using a loop, write a program that checks if the first and last characters of a string are the same. Use 
// `if-else` statements to print the result.
// let str = 'radar'
// let firstChar = str[0];
// let lastChar = str[str.length-1];
// if(firstChar === lastChar){
//   console.log("first and last char are same")
// } else {
//   console.log("first and last char are different")
// }

// 18. Write a program that replaces the first 3 characters of a string with "ABC" using slicing and `if-else` statements.
// let str = "Hello Everyone";

// if(str.length >= 3){
//   let newStr = "ABC" + str.slice(3);
//   console.log("Updated string:", newStr)
// } else {
//   console.log("String is too short to replace first 3 characters");
// }

// // 19. Create a program that uses a loop to reverse a string and print the reversed string.
// let str ="Hello Everyone";
//  let newStr = ''
// for(i=str.length-1; i>=0; i--){
//   newStr += str[i];
// }
// console.log(newStr);













