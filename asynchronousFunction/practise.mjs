let fName=`Suraj`;
let lName=` Shrestha`
let fullName=fName+lName;
// console.log(fullName)
let ar1=fullName.split(` `)
console.log(ar1)
let ar2=fullName.split(``);
// console.log(ar2)

console.log(`Name in array:`)
setTimeout(()=>{
      let stringFilter=()=>{
            let output=ar2.filter((value,i)=>{
                  if(value===` `){return false}//removing if any space
                  else{return true}
      
            })
            return output;
      }
      console.log(stringFilter())

},1000)