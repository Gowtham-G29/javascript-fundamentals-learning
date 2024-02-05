// The destructuring assignment syntax is a javascript expression that makes it possible to unpack values from arrays ,or properties from objects, into distinct variables


let arr = ['Hi','iam','G','Gowtham']

let [a,b,c,d]=arr         // assign a variable for each indexes of the array

console.log(a)


//Destructuring an objects

let myObject ={
    name:'adam',
    age : 25,
    gender: 'M',

    address:{
        country: 'England',
        city: 'london'
    }
}

let {name: n,age:ag,gender:g,address:{country:co}}=myObject // for destructuring an object use only key names to assign another name inside the destructuring to declare this.
//for nested objects use the key name inside the brackets and assign the values

console.log(n)
console.log(ag)
console.log(g)
console.log(co)

   

