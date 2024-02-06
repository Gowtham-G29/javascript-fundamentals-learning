
class animal{

    sound(){
        console.log('Animal makes different sounds')
    }
}

class dog{

    sound(){
        console.log('Dog barks')
    
    }
}

class cat{

    sound(){

        console.log("Cat meaws")
    }
}

let animals =new animal()
let tommy =new dog()
let pussy =new cat()

animals.sound()
tommy.sound()
pussy.sound()

// This is polymorphism