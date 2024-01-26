// console.log("hii")
//there are seven types of primitive data types
//  keywords used to create variable

//  1.var
//  2.let
//  3.const

//  var vs let vs const

//  if we are using var to create variable then we can redeclare and reassign the variable
//   var a=5
//   var a=10
//   console.log(a)

//   if we are using let to create variable then we cannot  redeclare it but we can  reassign the variable
//   let b=5
//      b=10
//    console.log(b)
     
//   if we are using const to create variable then we cannot  redeclare nor assign the variable
    //  const c=5
    //  console.log(c)
    //    c=10

    // use camel case font style to look better

    // for concatination

    let FirstName='abc'
    let LastName='xyz'
    console.log(FirstName+"   "+LastName)

    // backtick--most probably used for concatenation

    console.log(`${FirstName}   ${LastName}`)

    //= vs==vs===
    // ===  checks data type
    console.log(5=='5')  //output--true
    console.log(5==='5') // output--false because it checks data type

//     undefined vs null
//     let user
//     console.log(user)
// output null


// conditional operator

// if(true)
// {
//     console.log("hello")
// }
// else
// {
//     console.log("hi")
// }

// ternary operator

// let user = true
// user?console.log("hello"):console.log("hi")

// Arrayin java script in array we can store all types of data type

let arr=[1,2,3,4,5,'c','hello',true,false]

// for in loop--by default print index Number

// for(let i in arr)
// {
//     console.log(i)
// }

//for of loop--by default it prints loop

// for(let i of arr)
// {
//     console.log(i)
// }

// for each loop--combination of for in and for of

// arr.forEach((a,b,c)=>{
//    console.log(a)  a print values
//    console.log(b)  b print indices
//    console.log(c)
// })

// // 
// let new1=arr.forEach((a,b,c)=>{
    //  console.log(a)  
    // console.log(b)  
    // console.log(c)
    // return a
//  })
//  console.log(new1)
 

// let new2=arr.map((a,b,c)=>{
//     return a
//  })
//  console.log(new2)
 
//  map is same as for each but in for each no new array is created it modified in old array so in return it give undefined as output
// while map in return give array

// function--used for reusability
// function add()
// {
//     console.log("hello")
// }

// add()

// arrow function
// const add=() => {  //we pass parameter here
//     console.log("hello")
// }

// add()  //we pass argument here

// after return if we write anything inside function it will not execute

    //predefined function

                //find

let new4=arr.find((a,b,c)=>{
    return a>2
})
console.log(new4)

                //filter
let new3=arr.filter((a,b,c)=>{
 return a>2
})
console.log(new3)
 

// find print only 3 but filter print all value greater


   let x=[1,2,3,4,5,6]
//    for(let i of a)
//    {
//       console.log(i+(i+1))
//    }
       //reduce

    //    a is value b is succesive value c is index d is array
   let n=  x.reduce((a,b,c,d)=>{
    return a+b
   })
   console.log(n)
  
//    anything that have any property is called object

                                         //OBJECT
            
//object creation

let obj={
    id:1,                 //key value pair
    user:"hello",
    isPass:true

}
console.log(obj.user)

      //Array of object

   let arr3=[{id:1,user:"heloo"},{id:2,user:"hiii"}]
   arr.map((k)=>{
   console.log(k.id)
   }
   )
    
// let arr1=[1,2,3,4,5,6]
// arr1.push(5)   //push element in last
// arr1.pop()    //pop the element from last
// arr.unshift(20)  //push element in starting
// arr1.shift()  //pop element from starting
// console.log(arr1)

             //object inside function

  function add(a)
  {
    console.log(a.id)
  }
  let obj2={
    id:1,                 //key value pair
    user:"hello",
    isPass:true

}

  add(obj2)


       //methods--function inside object

let obj3=
{
    firstName:"hello",
    LastName:"hii",
    fullName:function()
    {
        console.log(this)
    }
}
obj3.fullName()


console.log(a)
var a=5