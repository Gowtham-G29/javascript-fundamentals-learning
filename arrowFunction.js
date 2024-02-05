//instead of function keyword we use arrow after the bracket

let test1 = ()=>{ //arrow is known as fat arrow
    console.log(2)
}

let test2 = a => console.log(a+2) // arrow function is allowed you to write a function in a single line
                                  // it doesnt need curly brackets


let test3 = (a,b)=> console.log(a+b)

// arrow function makes the syntax easier and simple


test1()
test2(2)
test3(10,3)