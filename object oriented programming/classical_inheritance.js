

class person{

    constructor(_name,_age){
        this.name=_name
        this.age =_age
    }
    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}



class Teacher extends person{  // teacher extends from the person properties

    constructor(_name,_age,_classStrenghth){

        super(_name,_age) // this super will inherit the properties from the parent class
        this.classStrenghth = _classStrenghth
    }

    hello(){
        super.welcome()
    }


}

class student extends person{

    constructor(_name,_age,_cgpa){

        super(_name,_age) // this super will inherit the properties from the parent class
        this.cgpa = _cgpa
    }

}

let person1 =new person('Adam',23)
console.log(person1)

let Teacher1 =new Teacher('mark',40,70)
console.log(Teacher1)

let student1 =new student('Gowtham', 18 ,9.7)
console.log(student1)

Teacher1.hello()