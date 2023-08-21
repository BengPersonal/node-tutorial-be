const https = require('https');
const express = require('express');
const cors = require('cors');
const fs = require("fs");
const mongo = require("./mongo-config")

const app = express();

const port = 4000;

var env = 'live'

app.use(cors());

app.use('/api', require('./api/test'));

app.use('/api', require('./api/userController'));

if(env === 'dev') {
    console.log('Starting Development')
    app.listen(port, ()=> {console.log('Backend server started on port ' + port);})
}
else {
    console.log('Starting Production')
    var privateKey = fs.readFileSync( './cert/key.pem' );
    var certificate = fs.readFileSync( './cert/cert.pem' );

    https.createServer({
        key: privateKey,
        cert: certificate
    }, app).listen(port, () => { console.log('Server started on port ' + port) });
}

mongo.getConnection();
