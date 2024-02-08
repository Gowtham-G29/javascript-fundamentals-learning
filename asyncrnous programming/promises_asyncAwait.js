function placeOrder(drink){

    return new Promise(function(resolve,reject){

        if(drink==='coffee'){
            resolve('orderd for coffee received')
        }else{
            reject('other order is running')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed')
        resolve(`${order}is served`)
    })
}

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsplaced=processOrder(orderPlaced)
//     return orderIsplaced
// }).then(function(processOrder){
//     console.log(processOrder)
// })// this is called chainning of promises


async function serveOrder(){

    try {
        let orderPlaced = await placeOrder('soup')
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced) // await is basically wait for promissified function
        console.log(processedOrder)
        
    } catch (error) {
          console.log(error)
    }
}
serveOrder()

