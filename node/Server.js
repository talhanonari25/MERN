const http = require('http');
const data = require('./Data.js')

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3001);
