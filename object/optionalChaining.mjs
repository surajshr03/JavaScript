// . property obj lai matra use garna milxa
// ?. ->optional chaining
let info={
      family:{
            father:{
                  age:43,
                  phoneNo:9840,
            },
            mother:{
                  age:37,
                  phoneNo:234,
            },

      },

};
console.log(info.family.mother)

//undefined.something = error
console.log(info?.name)//->undefined // name key xaina so check garxa xa vaney ans ddinxa xaina vaney undefined dinxa
//?. le ki ta data return garxa ki ta undefined
console.log(info?.family.father)
//ekchoti matra undefined xa vaney output nai undefined awuxa.
//undefined xaina vaney matra data return garxa
