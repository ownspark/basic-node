var express = require('express');
var app = express();
const fixedRoutes = require('./routes/fixed');
const movingRoutes = require('./routes/moving');
const { handleStatics, handleResponses } = require('./controlers');
const fs = require('fs');
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false }));

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
app.get('/', handleRequest)
app.use('/fixed', fixedRoutes);
app.use('/moving', movingRoutes);


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});