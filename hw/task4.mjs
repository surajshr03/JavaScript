// //nitAn->Nitan
// //split>map>join:concept;

// let input=`nitAn`
// let inputAr1=input.split("")//split
// console.log(inputAr1)

// let outputAr1=inputAr1.map((value,i)=>{
//       if(i===0){
//             return value.toLocaleUpperCase()
//       }
//       else{return value.toLowerCase()}
// })
// console.log(outputAr1)
// let result=outputAr1.join(``)
// console.log(result)

let name = `nitan`//NitaN banauney
console.log(`name:${name}`)//clg(`name: `,name)
let nameSplit=name.split(``)
console.log(`name after split:${nameSplit}`)
let nameMap=nameSplit.map((value,i)=>{
      if (i===0){ return value.toUpperCase()}
      else if(i===4){return value.toUpperCase()}
      else {return value.toLowerCase()}
})
console.log(`mapping:${nameMap}`)
let nameJoin=nameMap.join(``)
console.log(`joined:${nameJoin}`)






