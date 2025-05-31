for (let i = 0; i <=10; i++) {
    const element = i;
    // console.log(i)
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`)
    for (let j =1; j <=10; j++) {
        const element = j;
        // console.log(`${i}*${element}=${i*element}`)
    }

    
}

// let indianActors=["salman","srk","aamir","rishi","amitam"]

// console.log(indianActors.length)

// for (let index = 0; index < indianActors.length; index++) {
//     const element = indianActors[index];
//     console.log(element)
    
// }



// ==================break use in forloop=================================

for (let i = 0; i<= 10; i++) {
    if(i==5){
        // console.log(`${i} is dedected `)
        break
    }
    // console.log(i)

    
}


// =================continue use in for loop==============================


for (let i = 0; i<= 10; i++) {
    if(i==5){
        console.log(`${i} is detected `)
        continue
    }
    console.log(i)

    
}
