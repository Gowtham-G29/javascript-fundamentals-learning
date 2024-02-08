const fs =require('fs') // module in nodejs used to read and write a file


console.log("first line")


let data =fs.readFileSync('fn.txt') // read the file synchronously

console.log('File 1 -->'+data)

console.log("Last line")

// open in integrated terminal