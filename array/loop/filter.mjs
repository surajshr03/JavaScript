// filter should be subset of input 
// returns only true or false
//true xa vaney pass garney natra nai
// by default false

// let ar1=[1,2,3,4,5,6,7]
// let arEven=ar1.filter((value,i)=>{
//       if(value%2===0){return true}
//       else{return false}
// })
// console.log(arEven)
// console.log(ar1.length)

//make a func that takes input as array and filter even elements
// let evenArray=(inputArr)=>{
//       let output=inputArr.filter((value,i)=>{
//             if(value%2===0){return value}
//             else{return false}
//       })
//       return output
// }
// console.log(evenArray([1,2,3,4,5,6,7]))
//for odd
// let evenArray=(inputArr)=>{
//       let output=inputArr.filter((value,i)=>{
//             if(value%2===0){return false}
//             else{return true}
//       })
//       return output
// }
// console.log(evenArray([1,2,3,4,5,6,7]))

//for age>17
// let inputArr=(age)=>{
//       let output=age.filter((value,i)=>{
//             if(value>=18){return true}
//             else{return false}
//       })
//       return output
// }
// console.log(inputArr([19,20,21,22,23,24,25]))

//filter string ["a",1,"b",3] = ["a","b"]
// let string=["a",1,"b",3]
// let stringFilter=string.filter((value,i)=>{
//       if (value===`a`|| value===`b`){return true}
//       else {return false}

// })
// console.log(stringFilter)

//if string return true
//typeof use garney

// let string1=[`suraj`,`moon`,2]
// let stringFilter=string1.filter((value,i)=>{
//       if (typeof (value)===`string`){return true}
//       else {return false}

// })
// console.log(stringFilter)

// filter ["nitan", "ram","hari"] = ["nitan", "hari" ]
// (fiter those string whose length is greater or equal to 4)


// let name=["nitan", "ram","hari"]
// let nameFilter=name.filter((value,i)=>{
//       if (value.length>=4){return true}
//       else {return false}

// })
// console.log(nameFilter)

// range betw 10-100
// let range=[1,2,3,4,5,6,7,8,9,10,11,12,565,56]
// let rangeFilter=range.filter((value,i)=>{
//       if (value>=10&& value<100){return true}
//       else {return false}
// })
// console.log(rangeFilter)


//filter only truthy value
let Array=(inputArr)=>{
      let output=inputArr.filter((value,i)=>{
            if((value)===``||(value)===0||(value===false)){return false}
            else{return true}
      })
      return output
}
console.log(Array([`asdf`,0,``,` `,56,true,false]))
