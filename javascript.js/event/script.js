const btn=document.querySelector('#btn')

// event handling
// --on
// event addeventliistener
// const myFunc=()=>{
//   alert("myFunc")
// }


// btn.addEventListener('click',()=>{
//   alert("click")
// })


// btn.addEventListener('mouseover',()=>{
//   alert("addEventListiner")
// })

// btn.removeEventListener('mouseover',()=>{
//   alert(" addEventListiner")
// })


function showAlert() {
  alert("addEventListener");
}

btn.addEventListener('mouseover', showAlert);
btn.removeEventListener('mouseover', showAlert);
