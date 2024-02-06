
function printfirstname(firstname ,cb){ //this is a callback function 
    console.log(firstname)
    cb('Rogers')
}

function printLastname(lastname){

    console.log(lastname)
}

printfirstname('Gowtham' ,printLastname) //callback
// instead of calling two time use the function call as an argument and mention inside what would you print inside the
 
// application of callback

const isEven =(n)=>{
    return n%2==0
} 

let printresult =(evefn ,num)=>{
    const isNumEven =evefn(num)
    console.log(`The number ${num} is an even number ${isNumEven}`)
}

printresult(isEven,16)

//when we need to do two differnet things in same instead calling two time a two different function this can we can go with callback functions

