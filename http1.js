let http = require("http")
let server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/'){
        res.write("Welcome to http server");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("Welcome to about page");
        res.end();
    }
    else{
        res.write("Invalid server request");
        res.end();
    }
})
server.listen(3000);
console.log("Server started");