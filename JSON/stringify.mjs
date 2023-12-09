//db ma kaile boolean,array,obj save garna mildaina
//string ko form ma save hunxa
//bich ma middleware hunxa jasley (  Arr,Obj,... )to string and string to original ma change gardinxa
//image haru heavy huney vara sidhai server ma save garxam


// //concept:
// let a = null
// let aS = JSON.stringify(a)//->"null"

//kunai pani chij lai string ma convert gardinxa

console.log(JSON.stringify(null));//->"null"
let b = {name:"John",age:30};
console.log(JSON.stringify(b))//->"{"name":"John","age":30}"

console.log(JSON.stringify([1,2,3]))//->"[1,2,3]"