'use strict'

console.log(this)


function displayThis(){
    console.log(this)
}
displayThis()



let myobj ={

    name:'gowtham',
    age:23,
    myfn :function(){
        console.log(this.name)
    }

    }
    myobj.myfn()

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
        myobj2.myfn2()