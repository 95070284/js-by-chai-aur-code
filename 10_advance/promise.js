const promiseOne=new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise one execute')
        resolve()
    },2000)
    
})

promiseOne.then(function(){
    console.log('Async task one execute successfully')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async two execute')
        resolve()
    })
}).then(function(){
    console.log('resolve two executed successfully ')
})
