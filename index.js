var express = require('express');
var app = express();
let http = require('http');
let fs = require('fs');
 
let handleRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
};
  
app.get('/', handleRequest);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});