const express = require('express');
const path = require('path');
const logger = require('morgan');
const { v4: uuid } = require('uuid');

const dotenv = require('dotenv');
dotenv.config({ path: path.join(process.cwd(), '.env') });

const clientInit = require('./client');
clientInit();

global.__commonDir = path.join(__dirname, '../../../common');
global.__commonProtoRootDir = path.join(global.__commonDir, 'mcs-protos');
global.__commonProtoDir = path.join(global.__commonProtoRootDir, '/protos');
global.__commonProtoBuildDir = path.join(global.__commonProtoRootDir, '/build');

const indexRouter = require('./routes');

const app = express();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
    req.metaData = {
        debugId: uuid(),
        deviceId: req.headers.deviceid,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        'x-user-agent': req.headers['user-agent'],
        token: req.headers['x-access-token'] || req.headers.authorization,
        channel: req.headers.channel,
        'context-service': 'api-corporate',
        'context-method': req.baseUrl + req.url,
        'lang': req.headers.lang ? req.headers.lang.toLowerCase().trim() : 'en'
    };
    res.metaData = req.metaData

    next();
});

app.use((req, res, next) => {
    if (!req.is('application/octet-stream')) {
        return next();
    }
    // / List of Buffer objects /
    let data = [];
    req.on('data', function (chunk) {
        // / Append Buffer object /
        data.push(chunk);
    });
    req.on('end', function () {
        if (data.length <= 0) {
            return next();
        }
        // / Make one large Buffer of it /
        data = Buffer.concat(data);
        req.raw = data;
        return next();
    });
});

app.use('/api/v1/customer', indexRouter);

// / error handler /
app.use(function (err, req, res, next) {
    // / set locals, only providing error in development /
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // / render the error page /
    res.status(err.status || 500);
    res.send({ message: err.message || 'error' });

});

module.exports = app;