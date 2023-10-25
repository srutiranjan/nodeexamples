const Http= require('http');



Http.createServer((req,res)=>{

    res.write('This My Node server');

    res.end();

}).listen(2424,()=>{console.log('server is running....')});