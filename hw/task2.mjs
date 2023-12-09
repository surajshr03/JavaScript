export let sum=(a,b)=>{
      let _sum=a+b
      return _sum
}


export let product=(a,b)=>{
      let _product=a*b
      return _product
}

//a
export let is_18=(age)=>{
      if(age===18){
            return true
      }
      else{
            return false
      }
}

//b
export let isGreaterThan18=(age)=>{
      if (age>=18){
            return true
      }
      else{
            return false
      }
}

//c
export const enterRoom = (age) => {
      // return age<18? "You can enter the room!" : "You can't enter the room."
      if(age<18){
            return "You can enter the room!"
      }
      else{
            return "You can't enter the room!"
      }
    }

//d
export let isEven=(num)=>{
      let _num=num % 2
      return _num===0 ? `${num} is even.`:`${num} is odd.`
}

//e
export let avg=(a,b,c)=>{
      console.log(`The average of ${a}, ${b}, ${c} is:`)
       return (a+b+c)/3    
}

//f  
export let category=(num)=>{
      if((num>0 && num<=10)){
            return `${num} belongs to category1.`
      }
      else if ((num > 10 && num <=20)) {
      return `${num} belongs to category2.`} 

      else if (num>20 && num <=30){
            return `${num} belongs to category3.`
      }

      else{
            return `${num} belongs to other category.`
      }
}

//g 
 export let ticket_Price=(age)=>{
      if(age>=0&&age<=17){
            return `Your Ticket Price Is Free!`
       }
       else if(age>17&&age<=25){
            return `Your ticket cost is Rs.100` 
      }
      else if(age===26){
            return`Your ticket cost is Rs.150`
      }
      else //if(age>26)
      {
            return `Your ticket price is RS.200`
      }
 }   

 //h
export let i_Am=(num)=>{
     if(num>=3){
            return `I am greater or equal to 3`
      }
      else if(num<3){
            return "I am less 3"
      }
     
      else if (num===3){
            return ("I am 3")
      }
      else{
            console.log("I am other.")
      }
}

//i 
export let authentication=(age)=>{
      if(age>=18){
            return `You can watch the movie.`
      }
      else{
            return `You can't watch the movie.`
      }
}

