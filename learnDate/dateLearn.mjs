let a = new Date();//ISO format which is not readable
console.log(a)

let b = new Date().toLocaleString()//ISO format which is readable
console.log(b)

let c = new Date().toLocaleDateString()//date only
console.log(c)

let d = new Date().toLocaleTimeString()//time only
console.log(d)