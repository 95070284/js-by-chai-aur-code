//singleton 

// const fbUser=new Object()

const fbUser= {}

fbUser.name="mohdtalib"
fbUser.id="@431"
fbUser.password="raj324"


// console.log(fbUser)


let teleUser={
    fullname:{
        firstname:{
            name:"Mohd Talib",
            id:"mohd436"
        }
    }
}

// console.log(teleUser)
// console.log(teleUser.fullname.firstname)

// somhting more about Object

const course={
    name:"js in hindi ",
    courseInstructor:"Hitesh chaudhry", 
    courseFee:"999"
}

console.log(course.courseInstructor)

const {courseInstructor:instructor}=course   //destructuring in javaScript

console.log(instructor)


