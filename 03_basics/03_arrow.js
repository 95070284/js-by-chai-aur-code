let profile={
    name:"mohdtalib72k",
    follower:104,
    welcomeMessage:function(){
        let noOfStories=8
        console.log(`Username:${this.name} Follower:${this.follower} No of stories:${noOfStories}`)
        // console.log(this)

    }
}

// profile.welcomeMessage()
// profile.name="taukir342"
// profile.welcomeMessage()

// console.log(this)


// function user(){
//    const name="mohdtalib"
//    console.log(name)
//    console.log(this)
// }

// user()

// const user=function(){
//     const name="talib"
//     console.log(this.name)
// }


const printName= ()=>{
    console.log("Mohd Talib")
}

// printName()


// const addTwo= (num,num1)=>{
//     return num+num1
// }

// console.log(addTwo(3,9))


const addTwo= (num1,num2)=>(num1+num2)

// console.log(addTwo(3,9))


const exampleOfObjectInExplicitFunction= ()=>({name:"mohdtalib"})

// console.log(exampleOfObjectInExplicitFunction())
console.log(exampleOfObjectInExplicitFunction())

