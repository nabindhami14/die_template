let app = require('./index');
let debug = require('debug')('untitled:server');
let http = require('http');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: path.join(process.cwd(), '.env') });

let port = normalizePort(process.env.PORT || '3018');
let server = http.createServer(app);

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            // eslint-disable-next-line no-unreachable
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            // eslint-disable-next-line no-unreachable
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);


}