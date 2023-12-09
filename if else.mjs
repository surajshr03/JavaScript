// q.no-1: example can watch movies and can not watch movies

import { age, customerStatus, percentage } from "./aa.mjs"

if(customerStatus&&age>=18){
      console.log("You can watch the movie.")
}
else{
      console.log("You can't watch the movie.")
}


// b)	if age is 25,  console your ticket is free
// if age is 26,  console your ticket cost 100
// if age is 27,  console your ticket cost 200
// if age is other than 25,26,27 console you are not allowed

if(age===25){
      console.log(`Since your age is ${age},you'll get free ticket!`)
}
else if(age===26){
      console.log(`Since your age is ${age},your ticket cost Rs.100!`)
}
else if (age===27){
      console.log(`Since your age is ${age},your ticket cost Rs.200!`)
}
else{
      console.log("Sorry,you're not allowed!")
}

// Q2     
// Percentage >= 90  return Grade A
// Percentage >= 80 return  Grade B
// Percentage >= 70 return  Grade C
// Percentage >= 60 return  Grade D
// Percentage >= 40 return  Grade E
// Percentage < 40 return  Grade F
if(percentage>=90){
      console.log("Grade:A")
}
else if(percentage>=80 && percentage<90){
      console.log("Grade:B")
}
else if(percentage>=70 && percentage<80){
      console.log("Grade:C")
}
else if(percentage>=60 && percentage<70){
      console.log("Grade:D")
}
else if(percentage>=40 && percentage<60){
      console.log("Grade:E")
}
else if(percentage<40){
      console.log("Grade:F")
}
