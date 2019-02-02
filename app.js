var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    env = process.env.ENV || 'dev';
    msg = '<html><body  style="background-color:';

    if(env === 'dev') {
        msg += 'green'
    } else {
        msg += 'red'
    }
    
    msg +='"><h1>Hello, World! <br/>ENV:'+env+'</h1></body></html>';
    
    res.end(msg);
}).listen(8080); //the server object listens on port 8080