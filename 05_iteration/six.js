const myArr=[1,2,3,4,6,7,8,9]

// let newarr=myArr.filter((item)=>{
//     return item>4
// })

let newArr=myArr.filter( (item)=> item>4)

// console.log(newArr)

let arr=[]

myArr.forEach( (item)=>{
    arr.push(item)
} )

// console.log(arr)







const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   let book= books.filter( (bk)=>{
//      return bk.publish>=2000
        
//   } )

let book =books.filter(  (bk)=> bk.genre=="Non-Fiction")

  console.log(book)