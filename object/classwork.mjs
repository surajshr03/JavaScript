// define object with key name ,location, contactNumber
// 		get object	
// 		change location  to gagalphedi
// 		get object and see the effect
// 		delete contactNumber
// 		get object and see the effect

let object={
      name:`sun`,
      location:`ktm`,
      contactNumber:1234567890
}
console.log(object)
object.location=`gagalphedi`
console.log(`after change`,object)

delete object.contactNumber
console.log(`after delete `,object);