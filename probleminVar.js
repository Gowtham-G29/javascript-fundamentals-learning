var a=21
var a=38

console.log(a)


if(a===38){
    var b=20
    console.log(b)
}

// variable declared with var keyword are not blocked scoped they are function scoped

console.log(b)

//whenever use the var keywor inside the function that is limited inside the function only
//example
function test(){
    var c=100
    console.log(c)

}

test()
console.log(c) // var is function scoped