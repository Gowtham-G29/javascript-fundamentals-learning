

//filter method

//filter returns a new array it will all those elements that matches the specific condition
// if the conditions is true it will return the element for that condition if its false it will discard the elements that doesnt match the condition


let num = [1,2,20,35,12,17,46]

let evenNum = num.filter((n)=>{
    return n%2==0
})

console.log(evenNum) // same like map method it creates a new array


//for example

const transactions =[1000,3000,4000,2000,-898,3800,-4500]

let moneyTransactions=transactions.filter((n)=>{
    return n>0
}) 
console.log(moneyTransactions)