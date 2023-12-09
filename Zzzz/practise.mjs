// [1,2,[1,3],[1,3]]  ======= [1,2,[1,3]]
//map+stringify->set->map+parse
// let ar1=[1,2,[1,3],[1,3]];

// let stringifyArr= ar1.map((value,i)=>{

//       return JSON.stringify(value)
// })
// let uniqueValue=[...new Set(stringifyArr)]

// let desiredOutput=uniqueValue.map((value,i)=>{
//       return JSON.parse(value)
// })
// console.log(desiredOutput)


// [{name:"nitan",age:29},{name:"ram",age:30},{name:"nitan",age:29}] 

//  =====[{name:"nitan",age:29},{name:"ram",age:30}]

//  const ar2 =[
//       {name:"nitan",age:29},
//       {name:"ram",age:30},
//       {name:"nitan",age:29}
// ];

// let stringifyArr = ar2.map((value,i)=>{
//       return JSON.stringify(value)
// })

// console.log(stringifyArr)

// let ar3 = [...new Set (stringifyArr)]
// console.log(ar3)

// let desiredArr = ar3.map((value,i)=>{
//       return JSON.parse(value)
// }) 
// console.log(desiredArr)

//suruma map+stringify garney ani set use garera same/duplicate value hataune ani map+parse gari output nikalney

const arr = [
      {name:"nitan",age:29},
      {name:"ram",age:30},
      {name:"nitan",age:29}
];

let stringifyArr = arr.map((value,i)=>{
      return JSON.stringify(value)
})
console.log(stringifyArr)

let ar4 = [...new Set (stringifyArr) ]
console.log(ar4)

let parseArr = ar4.map((value,i)=>{  
      return JSON.parse(value) 
})
console.log(parseArr)
