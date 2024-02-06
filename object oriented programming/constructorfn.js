

let car1 ={
    name:'X4',
    company : 'BMW',
    color :'Red'
}

let car2 ={
    name:'S-class',
    company : 'Mercedes',
    color : 'White'
}

// this is a traditional way to write an object for each of the car
   //this way make repetetive time to write same form of code like same key names
   // to avoid this repetive task we use constructive functions
    // constructor function is a template

    function createcar(_name,_company,_color){

        this.name=_name 
        this.company=_company
        this.color = _color                     // this is pointing an empty object
                                             
         this.drive=function(){                                                          
            console.log(`I am driving ${this.name} and it is of ${this.color} color`)// inside this constructor we can also create an method
         }
    } // this template create an mutliple objects

    let car3 =new createcar('X4','BMW','Red') // new keyword create a new object
    let car4 = new createcar('S-class','Mercedes','White')


    console.log(car3)
    console.log(car4)

    car3.drive() // this take the value of car3 and apply in the statement of drive method inside constructor 

