// loops are the statements that we can use to control the a flow of program and to do the repertative tasks

var a='Hello world'

//for loop 

for(var i=0; i<=10;i++){
    console.log(a)
}// runs untill the value of i=10



//you have an array and you have to square Each element in the array

var num =[2,3,4,5,6,7,8]

var squaredArr=[] // empty array 

for(var i=0;i<num.length;i++){

    squaredArr.push(num[i]*num[i])

}
console.log(squaredArr)