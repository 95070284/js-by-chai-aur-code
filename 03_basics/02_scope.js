// let a=10
// const b=20
// var c=30


if(true){
    let a=101
    const b=30
    var c=40
}

// console.log(a)
// console.log(b)
// console.log(c)


/*   https://scaling-waddle-g4xxpw57xvqp299gw.github.dev/    */

function myAccount(){
    const username="mohdtalib "

    function myProfile(){
        const follower=102
        const like="❤️  1.K"

        console.log(username+ like)
    }

    // console.log(follower)
    myProfile()
}

// myAccount()



if(true){
    const username="mohdtalib"

    if(true){
        const channel=" youtube"
        console.log(username+channel)
    }
    // console.log(channel)
}


console.log(addone(5))

function addone(num){
    return num+1
}

// addTwo(9)   yaha se ye function hoisting work nahi karta hai .

 const addTwo = function(num){
    return num+2
}

console.log(addTwo(9))
