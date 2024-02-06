//console.log

console.log(this)// returns the empty object


//function

function displayThis(){
    console.log(this)
}
 displayThis()//global object




 //object->function

 let myobj ={

    name:'gowtham',
    age:23,
    myfn :function(){
        console.log(this.name)
    }

    }
    myobj.myfn()// object itself
 


//object->function-->function

    let myobj2={

        name:'gowtham',
        age:23,
        myfn2 :function(){
            function myfn3(){
                console.log(this)
            }
            myfn3()
        }
    
        }
        myobj2.myfn2() // returns global object