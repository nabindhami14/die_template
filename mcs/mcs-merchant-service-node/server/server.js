'use strict';

// ENVIROMENT VARIABLES
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') });

// GRPC 
const grpc = require('@grpc/grpc-js')

// HELPERS
const { grpcClientHelper, grpcMetaHelper, mysqlHelperReadonly, mysqlHelper } = require('common/helpers');

// MODULES
const merchantCtrl = require('./modules/merchant_service');
const paymentCtrl = require('./modules/payment_service');


// CONFIGURATION AND CLIENTS
const config = require('common/configs');
const clientInit = require('./client');
clientInit();


const server = new grpc.Server(null, preHook, postHook)

const customerProto = grpcClientHelper.loadPackageForServer(config.service.merchantService);

server.addService(customerProto.cbs.merchant_service.rpc.MerchantService.service, {
    createMerchant: merchantCtrl.createMerchant,
    getMerchants: merchantCtrl.getMerchants,
    getMerchant: merchantCtrl.getMerchant,

    // PAYMENT SERVICES
    createPayment: paymentCtrl.createPayment,

    // 
    createAuthType: merchantCtrl.createAuthType
})

server.bindAsync(
    `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, _) => {
        if (err) {
            console.error(`Server bind failed: ${err}`);
        } else {
            server.start();
            if (server.started) {
                mysqlHelperReadonly.init();
                mysqlHelper.init();
                console.log(`http://localhost:${process.env.GRPC_PORT}`);
            }
        }
    });


function preHook(context, call) {
    try {
        call.metadata.add('context-service', process.env.MCS_SERVICE_NAME || 'customer-service');
        call.metadata.add('context-method', context.method);
        call.request.metaData = grpcMetaHelper.getMetadata(call.metadata);
        logger.info(call.request.metaData, 'custsomer user service request', call.request);
    } catch (err) {
        logger.error(call.request.metaData, 'Error at Customer Service Request', err);
    }
}

function postHook(err, response, context, request, callBack) {
    try {
        request.metadata = request.metadata ? grpcMetaHelper.getMetadata(request.metadata) : {};
        if (err) {
            logger.error(request.metadata, `error form ${process.env.MCS_SERVICE_NAME || 'customer-service'}`, err);
            increaseErrorCounter(context)
            return err
        }
        logger.info(request.metadata, 'response from customer user service');
        return response;
    } catch (error) {
        logger.error(request.metadata, `error form ${process.env.MCS_SERVICE_NAME || 'customer-service'} postHook`, error);
        return error;
    }
}