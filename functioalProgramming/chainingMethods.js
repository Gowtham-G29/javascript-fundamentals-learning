

let arr =[
    {name:"A",age:14,gender:"M"},
    {name:"B",age:34,gender:"M"},
    {name:"c",age:24,gender:"F"},
    {name:"D",age:44,gender:"F"},
    {name:"E",age:54,gender:"M"},
    {name:"F",age:19,gender:"F"},
    {name:"G",age:74,gender:"M"},
    {name:"H",age:49,gender:"F"}
]

//Age of all Men

let ageOfmales = arr.filter((g)=>{
    
     return g.gender=="M"
}).map((a)=>{ // continues the next operation from this here we get the value of previous method and this will map from this
    return a.age 
})
console.log(ageOfmales)

// example problem

// from the transactions array filter out positive elements and calculate the total amount
//use filter and reduce to archieve this

const transactions =[1000,3000,4000,2000,-898,3800,-4500]

let total = transactions.filter((p)=>{
    return p>0
}).reduce((acc,value)=>{
    let totalsum =acc+value
    return totalsum
},0)
console.log(total)