//  =========================== FOR EACH LOOP========================================

const programmingLanguage=['js','c','py','java','ry','swift']


// programmingLanguage.forEach(function(item){
//     console.log(item)
// })

// programmingLanguage.forEach((value)=>{
//     console.log(value)
// })

function printmessage(item){
    console.log(item)
}

// programmingLanguage.forEach(printmessage)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
  
myCoding.forEach((item)=>{
    console.log(item.languageName)
})