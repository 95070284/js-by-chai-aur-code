let indianActor=["Salman", "Sharuk", "Aamir", "khritik"]

let indianSuperHeros=["Mahatma Gandhi","Dr BR Ambedkar", "Bhagat Singh", "Rani Laxmi Bai" ]

// indianActor.push(indianSuperHeros)

// let indian=indianActor.concat(indianSuperHeros)

// console.log(indian)

let indian=[...indianActor,...indianSuperHeros]

console.log(indian)

console.log(indian.filter("Salman"))
