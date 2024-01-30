var colors={
    primary: 'blue',
    secondary: 'red',
    tertiary: 'white'
}

//syntax

for(var color in colors){
    console.log(colors[color])//only use bracket notation here
    //it outputs the values of keys
    console.log(color +'-->'+colors[color])
}
// color = key 
//colors = object
//colors[color] = values



// for in loop also works in arrays
var colorsArray = ['yellow','Green','orange','pink']

for(var color in colorsArray){
    console.log(color + '-->'+colorsArray[color])// it outputs the values
}
//color = indexes
//colorsArray =Array
//colorsArray[color]= values of the corresponding indexes