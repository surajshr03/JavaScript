//set remove duplicate value for primitive.
let ar1=[1,`[1,2]`,1,`[1,2]`,[1,2],[1,2],false,null,null]

let uniqueValue=[...new Set(ar1)]
console.log(uniqueValue)

// let ar2 = uniqueValue.map((value,i)=>{
//       return JSON.parse(value)
// })
// console.log(ar2)

