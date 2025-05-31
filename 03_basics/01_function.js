 
function sayMyName()
{
    console.log("My name is Mohd Talib ")

}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }

// addTwoNumber(5,3)
// addTwoNumber(4,"5")
// addTwoNumber(5,new Number("5"))
// console.log(addTwoNumber(3,2))

function addTwoNumber(num1,num2){
    let sum=num1+num2
    return sum
}

let sum = addTwoNumber(4,8)
// console.log(sum)

function isUserLoggedIn(username)
{
    if(!username){
        console.log(`please enter your username`)
        return
    }
    console.log(`Congratulations ${username} you are successfully logged in.`)
}

// isUserLoggedIn("mohdtalib503")

//==============================================================

function listPrice(...num){
    return num

}

// console.log(listPrice(400,388,299,499, 299))

let product={
    name:"maggie",
    quantity:2,
    price:31
}

function listProduct(anyobject){
    
    let products=`title:${anyobject.name} Quantity:${anyobject.quantity} price:${anyobject.quantity}*${anyobject.price}=${anyobject.quantity*anyobject.price}`
    return products
}

// console.log(listProduct(product))

const myarr=[100,300,400,500]

function getSecondValue(getArray){
 console.log(getArray[1])
}

// getSecondValue(myarr)

getSecondValue([300,100,200,600,500])

