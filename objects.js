//in js objects are in key value pair

var person={
      firstName:'Adam',
      secondName :'smith',
      age:25,
      ownsCar:false
};


console.log(person)

//Access the values 

//1.dot notation
console.log(person.age)

//2.bracket notation
console.log(person['firstName'])


var cap={
    firstName:'steve',
    lastName:'Rogers',
    age:102,
    friends:['bucky barnes','brues banner','tony stark'],
    isAvenger: true,

    address: {
        state : 'New york',
        city : {
            name : 'Brooklyn',
            pincode :123456
        }
    }
}

console.log(cap.friends[2])//Bruce banner
console.log(cap.address.city.name)//brooklyn

cap.isAvenger=false//update an value in object
console.log(cap)

cap.movies =['age of ultrons','civil war','first avenger'] // add new key and values
console.log(cap)

delete cap.movies // delete the object key and values 
console.log(cap)
 