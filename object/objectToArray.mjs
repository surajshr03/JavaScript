// let info={
//       name:`suraj`,
//       age:21,
//       isMarried:false,

// }
// //[key ko] ani [values ko]
// //i.e-> 
// //[`name`,`age`,`isMarried`]
// //[`suraj`,21,false]

// //property bata
// //[[`name`,`suraj`],[`age`,`21`],[`isMarried`,`false`]]

// //keys bata:
// let keyArr=Object.keys(info);
// console.log(keyArr)

// // //value bata:
// // let valueArr=Object.values()
// // console.log(valueArr)

// // //property bata:
// // let propertyArr=Object.properties();
// // console.log(propertyArr)





let info = {
      name: "nitan",
      age: 29,
      isMarried: false,
    };
//     ["name","age","isMarried"] keys
//     ["nitan",29,false]  values
//     [["name","nitan"],["age","29"],["isMarried",false]]entries
    let keyArr = Object.keys(info);
    console.log(keyArr);
    let valueArr = Object.values(info);
    console.log(valueArr);
    let proArr = Object.entries(info);
    console.log(proArr);