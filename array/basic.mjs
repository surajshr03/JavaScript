//Declaration: let arr=[]

let arr=[`sun`,200,false]

//get whole array
console.log(arr)
//get specific element
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
//change specific element
arr[2]=true
console.log(arr)
//adding new elemrnt
arr[3]=32
console.log(arr)
//delete specific element
delete arr[1] //[`nitan`, , true , 32] i.e index lai nai delete gardaina just element lai matra delete garxa
console.log(arr) //[ 'sun', <1 empty item>, true, 32 ]
