


// reduce method

let num = [1,2,3,4,5,10]

let result = num.reduce((acc,value)=>{
    let updatedsum =acc+value
    return updatedsum
},0) // accumulator value stored here

console.log(result)

// it outputs the single value
//accumulator means the initialization like let sum=0;

//for example multiplication

let product =num.reduce((acc,value)=>{
    let updatedProduct=acc*value
    return updatedProduct
},1)
console.log(product)
