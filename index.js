const http = require("http");

http.createServer(function(req,res){
    res.write("<h1>this is our first server</h1>");
    res.write(JSON.stringify({Name:"Aanksha",age:"21"}))
    res.end("<h2>Close our server");
})
.listen(3300);