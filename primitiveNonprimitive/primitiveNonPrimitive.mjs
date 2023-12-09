// in primitives (boolean,string,number,undefined,null)
// for every let a new memory space is created 

// in non primitive (obj,array)
// if there is let a new memory space is created but first it see weather the variable is copy of another variable
//if the variable is copy of another variable then at that time 
// it will not create memory for that variable rather it share memory

// let ar1=[1,2,3] ;
// let ar2=ar1;//ar2 is copy of ar1 so they share memory
// ar1.push(4)
// console.log(ar1)
// console.log(ar2)

//===
//primitive

// let a=2
// let b=2
// let c=3
// console.log(a===b)//true
// console.log(a===c)//false

//nonPrimitive

// let x=[1,2,3]
// let y=x//x&y shares same mem address
// let z=[1,2]
// console.log(x===y)//true: cuz they share same memory address ->i.e checks if same memory or not?
// console.log(x===z)//false:cuz they share different memory location/address

//true huna lai same memory location ma huna parxa.
// console.log([[1,2]===[1,2]])// will return false cuz [1,2] doesn't even have memory allocation to begin comparison with.
