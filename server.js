// import the core http module installed w/node
let http = require('http');

const PORT = 3000;

// create & start web server
http.createServer((req, res) => {
    // set http header
    res.writeHead(200, { 'Content-Type': 'text/html '});

    // set response body
    res.write('<h1>Hello World</h1>');

    res.end();
}).listen(PORT);

console.log(`Node server running on port ${PORT}`);