var fs = require("fs");
var server = require("http");
server.createServer(function(req,res){
    let filename, type;
    switch (req.url){
        case "/":
            filename = "index.html";
            type = 'text/html';
            break;
        case "/style.css":
            filename = "style.css";
            type = 'text/css';
            break;
        default:
            filename = __dirname + req.url;
            type = 'image/png';
            break;
    } 
    fs.readFile(filename, function(err, data){
        if (err){
            if(err.code === "ENOENT"){
                res.writeHead(404);
                res.end();
                return;
            }
            else throw err;
        }
        res.writeHead(200, {'Content-Type': type});
        res.write(data);
        res.end();
    });
}).listen(80);