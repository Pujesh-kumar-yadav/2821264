// const btn=document.querySelector('#btn')

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


// function showAlert() {
//   alert("addEventListener");
// }

// btn.addEventListener('mouseover', showAlert);
// btn.removeEventListener('mouseover', showAlert);



const btn = document.querySelector("#btn");
const first = document.querySelector(".first");

let isTrue = true;
btn.addEventListener("click", () => {
  if (isTrue) {
    first.style.backgroundColor = "black";
    first.style.color = "white";
    btn.innerText = "change color to white";
    isTrue = false;
  } else {
    first.style.backgroundColor = "white";
    first.style.color = "black";
    btn.innerText = "change color to black";
    isTrue = true;
  }
});

