

// find method returs element of an array that satifies the condition

const transactions =[1000,3000,4000,2000,-898,3800,-4500]

let firstWithDrawal = transactions.find((a)=>{  

    return a<0            // this conditions satisfied for which first element it will return that first element
})

console.log(`firstwithdrawal`,firstWithDrawal)




// findIndex

let firstWithDrawalIndex = transactions.findIndex((a)=>{  // same like a find method                                                     
      //findindex returns the index of the first element that satisfies the condition

    return a<0           
})
console.log(`index`,firstWithDrawalIndex)