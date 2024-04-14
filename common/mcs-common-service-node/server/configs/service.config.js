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
    adminService: {
        v1: {
            port: process.env.ADMIN_SERVICE_PORT,
            host: process.env.ADMIN_SERVICE_HOST,
            rpcService: 'AdminService',
            rpcProtoFile: 'admin_rpc',
            packageName: 'cbs.admin_service.rpc' 
        }
    }
}