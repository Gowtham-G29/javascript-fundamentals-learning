const fs =require('fs') // module in nodejs used to read and write a file


console.log("first line")


// let data =fs.readFileSync('fn.txt') // read the file synchronously

// console.log('File 1 -->'+data)

fs.readFile('fn.txt',cb1)

function cb1(err,data){
    if (err){
        console.log(err)
    }
    console.log('File 1 data->'+data)
}


fs.readFile('fn2.txt',cb2)

function cb2(err,data){
    if (err){
        console.log(err)
    }
    console.log('File 2 data->'+data)
}


fs.readFile('fn3.txt',cb3)

function cb3(err,data){
    if (err){
        console.log(err)
    }
    console.log('File 3 data->'+data)
}




console.log("Last line")

// while the output the code doesnt wait for function execution it prints firstline  then skip functions ,direcly moves to last line 
// normal function takes time to excute ,this behaviour is called asynchronous behaviour




// all the definition of excution on notebook

//---> the execution order in the callback queue is randomly




