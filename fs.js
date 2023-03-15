const fs = require('fs');

let adata = fs.readFile("abc.txt","utf-8",(err,data)=>{
    //console.log(data);
    fs.writeFile("xyz.txt",data,(err)=>{
        if(err) console.log(err)
    });
})

let readStream = fs.createReadStream("abc.txt","utf-8")
readStream.on("data",(chunk)=>{
    console.log("chunk")
})

console.log("End of index");