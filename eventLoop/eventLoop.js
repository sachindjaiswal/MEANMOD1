console.log("First");
setTimeout(()=>{
    console.log("This would be printed after 2 sec , this was set timeout");
    
},2000)
console.log("Last");


setInterval(()=>{
    console.log("This would be printed after every 1 sec , this is set interval");
    
},1000)


setImmed