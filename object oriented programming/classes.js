
class person {
    constructor(_name,_age){
            
        this.name = _name
        this.age =_age
    }

    welcome(){                            // doent need the "this" keyword in crating a method in classes
        console.log(`welcome ${this.name}`)
    }
}

let person1 =new person('Adam',19)
let person2 =new person('mark',59)
let person3 =new person('steve',18)


console.log(person1)
console.log(person2)
console.log(person3)

person1.welcome()