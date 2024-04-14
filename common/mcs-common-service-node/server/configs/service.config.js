'use strict';


const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
    path: path.join(__dirname, '../../.env')
});


module.exports = {
    customerService: {
        v1: {
            port: process.env.customer_SERVICE_PORT,
            host: process.env.customer_SERVICE_HOST,
            rpcService: 'CustomerAuthService',
            rpcProtoFile: 'customer_rpc',
            packageName: 'cbs.customer_auth_service.rpc'
        }
    },
    // customerAuthService: {
    //     v1: {
    //         port: process.env.AUTH_SERVICE_PORT,
    //         host: process.env.AUTH_SERVICE_HOST,
    //         rpcService: 'AuthenticationService',
    //         rpcProtoFile: 'customer_auth_rpc',
    //         packageName: 'bfi.customer_auth.rpc'
    //     }
    // }
}