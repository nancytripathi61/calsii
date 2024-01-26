///java script is a schyronous(order wise or order fixed) and single thread language
// js code run in browser in v8 engine
//console.log() is not a part of java script



                      //ASYNCHRONOUS PROGRAMMING

// predifined function

// setTimeout function delays output for 2 second  ---- not a part of js

// console.log("one")

// setTimeout(()=>{
//     console.log("Three")
// })

// setTimeout(()=>{
//     console.log("four")     
// },2000)   //time delay

// console.log('two')


//************************DOM----Document Object Model ----html +cs  ******************************

//to print entire html file

// console.log(document,"html")

// to print only selected part we have to select it first

// id selector

let h2=document.getElementById("one")
h2.innerText="hiiii good m"
console.log(h2)
h2.style.color="red"  // to change color
// // console.log(h2)


//class selector

// let h1=document.getElementsByClassName("two")
// console.log(h1)

//Query selector---in query selector we select element in any type

let h1=document.querySelector("#one")
console.log(h1)
let h3=document.querySelector(".two")
console.log(h3)

let h4=document.querySelectorAll(".two")
console.log(h4)