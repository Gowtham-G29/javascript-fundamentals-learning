// for of loop creates a loop iterating over iterable objects


var scores=[60,90,80,75]

//syntax

for(var score of scores){
    console.log(score) // here the score outputs the value of the keys
}

// for get the index values use the method - entries()

let colors =['red','white','Green']

for(var[index,color]of colors.entries()){
    console.log(index+'-->'+color)
}