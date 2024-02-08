


function hello(){

    console.log('hello')
}

let timer=setInterval(hello,1000) // this block of code is executed every 1 seconds but it cant stop ,it only only stop by manually


setTimeout(function(){
    clearInterval(timer)     // this clear interval method inside setTimeout is stop the setInterval
},3000)