//some chai ek dueta check garna lai use garney ani every chai sabai ko case use garney
//sabai le true garyo vaney true natra false

// ques: does array has all +ve no?
//0 is neutral number

// let ar1=[1,2,3,4,5,6]
// let a=ar1.every((value,i)=>{
//       if(value>0){return true}
//       else {return false}
// })
// console.log(a)

//ques: from an array check if student has passed or not?
// let marks=[50,46,78,45]
// let marksCheck=marks.every((value,i)=>{
//       if (value>40){return true}
//       else {return false}
// })
// console.log(marksCheck)

//using some method find wheather we have string "bearer token"

let string = "Bearer token"
let string1 = string.split(" ")
let check = string1.some((value, i) =>{
    if((value) === "Bearer"){return true}
    else{return false}
})
console.log(check)