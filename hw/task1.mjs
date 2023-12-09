//make a function called sum
// pass two values
//function must return the sum of two values

// export let sum=(a,b)=>{
//       let _sum=a+b
//       return _sum
// }

 // `node .\hw\task1.mjs`

//  if age [from 1 to 17],  console your ticket is free
//  if age[18 to 25 ],  your ticket cost 100
//  else,  your ticket cost 200
export let ticket=(age)=>{
      if(age>=1 && age<=17){
            return ` your ticket is free`
      }
      else if(age>=18&&age<25){
            return`your ticket cost is 100`

      }
      else{
            return `your ticket cost is 200`
      }
}

