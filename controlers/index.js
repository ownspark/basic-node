const fs = require('fs');


exports.handleStatics = (req, res) => {

    fs.writeFile("./statics.txt", JSON.stringify(req.rawHeaders), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    console.log("PAYMENT CALLBACKS", req.params.pag, req.body);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>OK Received</h1><br /><br />We got it from: ' + req.url);
    res.end();

};

exports.handleResponses = (req, res) => {
    
    fs.writeFile("./responses.txt", 'received data', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(req.body);
    }); 
    console.log("PAYMENT CALLBACKS", req.params.pag, req.body);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>OK Received</h1><br /><br />We got it from: ' + req.url);
    res.end();

};