function add (a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){

    console.log(a/b)

}

module.exports ={ // this module.exports object export all the funcrion to  some    other files

    addition:add,
    subraction:sub,
    multiplication:mul,
    divison:div
}