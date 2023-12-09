let product = [
      {name:`earphone`,price:1000},
      {name:`battery`,price:2000},
      {name:`charger`,price:500}
]
//[e,b,c]
let ar1 = product.map((value,i)=>{
      return value.name;
})

console.log(ar1)


let priceArr = product.map((value,i)=>{
      return value.price;
  
})
console.log(priceArr);

let ar3 = product.map((value,i)=>{
      if (value.price>500){
            return value.price;
      }
      
})
console.log(ar3);

let ar4 = product.map((value,i)=>{
      if (value.price>700){
            return value.name;
      }
})
console.log(ar4);
//or
let valueG700 = product.filter((value,i)=>{
      if (value.price>700){
            return true;
      }else{
        return false; 
      }
});
console.log(valueG700)

let valueG = valueG700.map((value,i)=>{
      if (value.price> 700){
            return value.price;
      }
      else{
            return value.price;
      }
})
console.log(valueG)
      

let total = priceArr.reduce((pre,cur)=>{
 
      return pre+cur; 
},0)
console.log(total);


