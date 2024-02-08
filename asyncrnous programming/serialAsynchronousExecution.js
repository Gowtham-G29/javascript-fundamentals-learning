/// We know the callbacks are execute randomly inorder line 2,1,3

// in order to archeive serial execution in one by one order 1,2,3 to put the call into previous execution phase 
// this makes the code execute whenever 1 is executed only 2 is going to execute



const fs =require('fs') // module in nodejs used to read and write a file


console.log("first line")


fs.readFile('fn.txt',cb1)

function cb1(err,data){
    if (err){
        console.log(err)
    }
    console.log('File 1 data->'+data)
    fs.readFile('fn2.txt',cb2) // only 1 is executed hereafter the 2 is excuted
}




function cb2(err,data){
    if (err){
        console.log(err)
    }
    console.log('File 2 data->'+data)
    fs.readFile('fn3.txt',cb3)
}



function cb3(err,data){
    if (err){
        console.log(err)
    }
    console.log('File 3 data->'+data)
}




console.log("Last line")






