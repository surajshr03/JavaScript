//array le just value matra store garxa
//array is made by combination of value
let arr=[`sun`,23,false,`ktm`]
// object : combination of key & value pair
//to declare let obj_name{ separate by ,}

let info={
      name:`sun`, //name(key),sun(value) ,property=key+value
      age:23,
      isMarried:false,
      address:`ktm`
}

console.log(info)
console.log(info.age)
//to change
info.address=`lalitpur`
console.log(info)
//to delete
delete info.name // to delete key from object
console.log(info)
