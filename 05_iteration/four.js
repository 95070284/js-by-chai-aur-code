let obj={
    name:"Mohd Talib",
    course:"BCA",
    sec:"A",
    Active:"yes"
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
}

const programmingLanguage=['java',"js", 'cpp', 'c', 'py']

for (const key in programmingLanguage) {
    console.log(programmingLanguage[key])
}