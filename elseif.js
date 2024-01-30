//90 to 100 -A
//70 to 89 -B
//50 to 69 -C
// lower than 50 -F

var stuentsScore = 20
if(stuentsScore>90){
    console.log("A grade")
}
else if(stuentsScore>=70 && stuentsScore<=89){
    console.log('B grade')
}else if(stuentsScore>=69 && stuentsScore<=50){
    console.log('C grade')
}else{
    console.log('Fail')
}