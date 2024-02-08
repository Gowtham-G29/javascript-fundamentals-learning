//setTimeout will always take callback fuctions and milliseconds
//setTimeout(cb,2000)


console.log("before")

function greet(){

    console.log("hello from kct")
}

setTimeout(greet,5000)  // using this function the block of code runs after the 5sec
                        // this time delay also based on the concept of call stack, callback queue
console.log('After')