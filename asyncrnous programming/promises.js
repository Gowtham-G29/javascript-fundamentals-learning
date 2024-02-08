// how to produce promise


let myPromise = new Promise(function(resolve,reject){

    const a = 4
    const b = 5

    setTimeout(()=>{
        if(a===b){
            resolve('the value are equal')
        }else{
            reject('the values are not equal')
        }
    },2000)

})



// console.log(myPromise)//pending

//fullfiled - then method  then and resolve are connected
myPromise.then(function(result){
    console.log(result)
}) //fullfilled

// when ever the rejected state use catch method catch error

myPromise.catch(function(failedResult){
    console.log(failedResult)
})//rejected

//your promise get settled