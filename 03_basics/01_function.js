 
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

isUserLoggedIn("mohdtalib503")