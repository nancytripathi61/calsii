// FIRST METHOD

// function fun1()
// {
//     console.log("hello")
// }

//SECOND METHOD

let btn=document.querySelector("button")
btn.onclick=function()
{
    console.log("helooo")
}

//THIRD METHOD

let btttn=document.querySelector("#one")
btttn.addEventListener("click",function()
{
    console.log("hii")
})
btttn.addEventListener("click",function()
{
    console.log("hiiiiiiiiiiiiiiii")
})

//to print output in console

let inp=document.querySelector("input")
inp.addEventListener("input",(e)=>    //e can be anything
{
    // console.log("hello")
    // console.log(e.target)   //e can be anything
    console.log(e.target.value);
})

//to print output in screen
let i=document.querySelector("#two")
let p= document.querySelector("p")
i.addEventListener("input",(e)=>    //e can be anything
{
    p.innerText=e.target.value
})


