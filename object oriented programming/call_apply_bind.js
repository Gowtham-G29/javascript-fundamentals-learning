

let person1 ={

    firstName: 'steve',
    lastName:'Rogers',
    age : 102,

    printDetails: function(){
        console.log(`hi iam ${this.firstName} ${this.lastName} and i am ${this.age} years old`)

    }
}

let printDetails1 =function(city,power){
    console.log(`hi iam ${this.firstName} ${this.lastName} and i am ${this.age} years old from ${city} i have the ${power}`)

}

let person2 ={

    firstName: 'tony',
    lastName:'stark',
    age : 41

    
}

// person1.printDetails()
// person2.printDetails()

//call method 

 person1.printDetails.call(person2) // call method borrows the printdetail function from the person1 for person 2
 printDetails1.call(person2)// also we can call the function when it is written in globally

 //apply method

printDetails1.apply(person2,['newyork','iron armour'])// only differnce between call and apply is passing arguments in the invoke is in the form of array

//bind method

let mynum=printDetails1.bind(person2,['newyork','iron armour']) // bind method has same operation like call, apply but only have one advandage is to to store the fuction in another variable
