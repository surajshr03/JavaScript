//anything that push task to background is called asyncronous function.
//incase of backend node is background whereas in case of frontend browser is the background
//callstack are those which run javascript code
//asynchronous concept:
console.log(`a`);
//setTimeout le function lai node ma fyakdinxa ani timer attach gardinxa
//node le jaba code haru execute vara khali hunxa ani javascript lai return garxa tyo function
//so paila a ayo
//ani setTimeout execute hunxa parney but tesle function lai node ma pathauxa ani node le deko timer ma memory allocate garera function lai halxa
//i.e setTimeout push task to node and in mean time other code gets excuted
//a paxi b print hunxa
//aba code khali vayesi node le feri tyo function lai js ma dinxa
//thus js is still synchronous
setTimeout(()=>{
      console.log(`i am setTimeout`);
},5000)
setTimeout(()=>{console.log(`next setTimeout`)},500)//jati 0 thapyo teti time badxa



console.log(`b`)