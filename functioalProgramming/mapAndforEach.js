

let arr =[1,2,3,4,5,6]
let squaredarr=[]

for(var i=1;i<=6;i++){
                                   
     squaredarr.push(i*i)
}

console.log(squaredarr)


//map method

const num=[1,2,3,4,5]

const squarednum=num.map(function(n){ //map function is function that expects a function

    return n*n

})
console.log(squarednum)

//map will loop through every element in array that will perform specfic operation that you will provided
//map will work as a for loop
// map method will always return you a new array which means its create a new array


//for example instead of using for loop for iteration use map method

const transactions =[1000,3000,4000,2000,-898,3800,-4500]
const inrtodollar =80;

let dollars =transactions.map((a)=>{
    return a/inrtodollar
})
console.log(dollars)

//forEach

// map and foreach are same operation like iteration but its doesnt support returning the array its gives the individual values 

let dollars1=transactions.forEach((amount)=>{
    console.log(amount/inrtodollar) // it doesnt support return statement 
})

console.log(dollars1) // it returns the individual values its doesnt in the form of array