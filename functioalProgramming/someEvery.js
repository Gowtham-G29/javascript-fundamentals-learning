//some method

// some : condition Check: to get true or false based on the condition
// it will return true if even 1 element satisfies the condition


const transactions =[-1000,-3000,-4000,-2000,898,-3800,-4500]

let resultsome = transactions.some((a)=>{

    return a>0
})

console.log(resultsome)




// every method

// its returns true only when every element should satifies that condition
let resultevery = transactions.every((a)=>{

    return a>0
})

console.log(resultevery)