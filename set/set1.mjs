//[1,2,3,1,2,5]->[1,2,3,5]i.e removes duplicate value from array


// let s1=new Set([1,23,1,2,3,2])
// console.log(s1)

// let s=[1,23,4,34,5,6,6,7,78,8,6]
// let s2 =new Set(s)
// console.log(Array.from(s1))//converts set to array

// let arr= new Set([1,2,1]);//[1,2]
// let uniqueValue= [...arr]// ... ->wrapper opener

// console.log(uniqueValue);
// console.log(...uniqueValue)

// let a={name:"John",age:20}


let input=[1,23,4,2,21,1,2,1,1]
let uniqueValue=[...new Set(input)]
console.log(uniqueValue)