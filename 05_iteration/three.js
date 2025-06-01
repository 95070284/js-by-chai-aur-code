//============ for of loop ================================

const arr=[1,2,3,4,5,6]

for (const element of arr) {
    // console.log(element)
}



const greeting="hello world"

for (const greet of greeting) {
    // console.log(greet)
}


const map =new Map()

map.set("IN", "India")
map.set("PK", "Pakistan")
map.set("USA","United State America")
map.set("AS", "Australia")
map.set("UAE", "United arab emiarates")

console.log(map)

for (const [key,value] of map) {
    // console.log(`${key}:${value}`)
}


let obj={
    name:"Mohd Talib",
    course:"BCA",
    sec:"A",
    Active:"yes"
}

// for (const [key,value] of obj) {
//     console.log(`${key}:${value}`);
// }
