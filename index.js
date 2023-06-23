const app = require('./app')
const fs = require('fs')
const dbOps = require('./config/db');

dbOps.connect();
let server
if(process.env.PROTOCOL == 'https'){
    const https = require('https')
    server = https.createServer({
        key : fs.readFileSync(config.certificate.privkey,'utf8'),
        cert : fs.readFileSync(config.certificate.fullchain, 'utf8')
    }, app);
}
else{
    const http = require('http')
    server = http.createServer(app);
}



server.listen(process.env.PORT)