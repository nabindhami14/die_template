'use strict';

// const getLogger = () => {
//     let logger;
//     if (process.env.APP_ENV == 'development') {
//         logger = require('./logger_helper')
//     } else {
//         logger = require('./logger_helper')
//     }
//     return logger;
// }


module.exports = {
    grpcClientHelper: require('./grpc_client.helper'),
    grpcMetaHelper: require('./grpc_metadata.helper'),
    // grpcMiddlewareHelper: require("./grpc_middleware_helper"),
    // logger: getLogger(),
    // databaseHelper: require("./mysql.database.helper"),
    mysqlHelper: require("./mysql.database.helper"),
    mysqlHelperReadonly:require("./mysql.database.helper.readOnly"),
    keyHelper : require("./object_key_helper")
};