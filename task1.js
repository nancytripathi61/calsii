let i=document.querySelector("input")
let p= document.querySelector("p")
i.addEventListener("input",(e)=>    //e can be anything
{
    p.innerText=e.target.value
})

let inp=document.querySelector("button")
let li=document.querySelector("li")
inp.addEventListener("input",(e)=>    //e can be anything
{
    console.log(e.target.value);
})
