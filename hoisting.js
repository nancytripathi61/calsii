//   for var

// console.log(a)
// var a=5

// var c
// console.log(c)
// c=5
// // for let

// console.log(b)
// let b=6

// let d
// console.log(d)
// d=9


// we cannot access let outside the block
//var---global variable
//let--local variable

// {
//     ----block
// }

// {
//     let e=5
//     console.log(e)
// }
// console.log(e)


///High order function
//  function which contain another function in its argument
//argument passes while calling

// function outer(a)
// {
//     console.log("outer")
//     a()
// }

// function inner()
// {
//     console.log("inner")
// }

// outer(inner)


//function that return another function

// function outer()
// {
//     console.log("outer")
//     function inner()
//     {
//         console.log("inner")
//     }
//     return inner
// }

// let i=outer()
// i()

// let arr=[1,2,3,4,true,false,'hello','hiiiii']
// function getString(arr)
// {
//     let res=[]
//     for(let item of arr)
//     {
//         if(typeof item==='string')
//         {
//             res.push(item )
//         }
//     }
//     return res

// }
// console.log(getString(arr))

// function getNum(arr)
// {
//     let res=[]
//     for(let item of arr)
//     {
//         if(typeof item==='number')
//         {
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(getNum(arr))

// function getBoolean(arr)
// {
//     let res=[]
//     for(let item of arr)
//     {
//         if(typeof item==='boolean')
//         {
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(getBoolean(arr))

//....more optimize form of above code using high order function

// let arr=[1,2,3,4,true,false,'hello','hiiiii']
// function getString(item)
// {
//     return typeof item==='string'
// }
// function getNumber(item)
// {
//     return typeof item==='number'
// }
// function getBoolean(item)
// {
//     return typeof item==='boolean'
// }

// function get(arr,fn)
// {
//    let res=[]
//    for(let item of arr)
//    {
//     if(fn(item))
//     {
//         res.push(item)
//     }
//    }
//    return res
// }

// console.log(get(arr,getString))
// console.log(get(arr,getNumber))
// console.log(get(arr,getBoolean))

// CallBack Function---- function which contain another function in its argument e.g--reduce ,filter,map, high order function

// function CallBack(num,fn)
// {
//     return fn(num)
// }
// function boolean(num)
// {
//     return typeof num==='boolean'
// }
// function number(num)
// {
//     return typeof num==='number'
// }
// function string(num)
// {
//     return typeof num==='string'
// }

// console.log(CallBack(true,boolean))
// console.log(CallBack(1,number))
// console.log(CallBack('hello',string))

             //CLOSURE PROPERTY

// inner function takes the refrence of the variable inside outer function before outer function gets destroyed
// Lexical environment---if we are not getting variable in current function so we check it on its parent that is known as
// lexical environment of parent

function outer()
{
    let user='yhi ayega'
    function inner()
    {
        console.log(user)
    }
    return inner
}

let a= outer()
a()