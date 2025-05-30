let newSymbol=Symbol("key1")

let myInfo={
    name:"Mohd Talib",
    enrollment: 202230105-8,
    year:2022,
    [newSymbol]:"key2",
    course:"BCA",
    email:"talisman70k@gmail.com"
}

// console.log(typeof myInfo)

// console.log(typeof myInfo.newSymbol)

myInfo.email="mohdtalib@google.com"

// console.log(myInfo["enrollment"])

// Object.freeze(myInfo)

myInfo.course="B.Teach"

// console.log(myInfo)

myInfo.greeting=function(){
    console.log(" hey  Hi this is greeting function creation with the help of object")
}

console.log(myInfo.greeting())

myInfo.greeting2=function(){
    console.log(`This is an Example of function whose use object value, this statement access the name ${this.name} from object.`)
}

console.log(myInfo.greeting2())