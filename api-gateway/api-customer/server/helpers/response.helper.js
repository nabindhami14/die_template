'use strict';

const { bfi } = require('proto/bundle');
// const { console } = require('common/helpers');
const httpStatus = require('http-status');
const { httpStatusArrayLists } = require('../config');

((responseHelper) => {
    responseHelper.sendSuccessResponse = (status, data, proto, res, req = false) => {
        try {
            if (status == 0) {
                console.error(req.metaData, 'Status 0 ====:: respData', data)
            }
            const payload = proto.create(data);
            const bufferResponse = (req && req.headers["content-type"] == 'application/json' ? req.headers["content-type"] : proto.encode(payload).finish());
            if (status == 0 || status == "0") {
                status = 200
            }
            return res
                .status(status)
                .set(req ? req.headers["content-type"] : "application/octet-stream")
                .send((req && req.headers["content-type"] == 'application/json' ? payload : bufferResponse));
        } catch (error) {
            throw error;
        }
    }
    responseHelper.sendErrorResponse = (data, res, metaData) => {
        try {
            data = data.message ? data.message : data
            console.error(metaData, 'error form response  helper', data)

            let status = httpStatus.INTERNAL_SERVER_ERROR;
            let message = 'Internal server error';

            if (data.details && data.details === "Deadline Exceeded") {
                status = httpStatus.REQUEST_TIMEOUT
                message = 'Request time out'
            }

            const bufferResponse = responseHelper.createBufferResponse(
                {
                    status: status,
                    message: process.env.APP_ENV === 'development' ? data.stack || data : message,
                },
                bfi.common.Response
            );

            return res.status(status).set('Content-Type', 'application/protobuf').send(bufferResponse);
        } catch (error) {
            throw error;
        }
    }

    responseHelper.sendListResponse = (req, err, res, data, proto) => {
        try {
            if (err) {
                console.error(req.metaData, 'error from send list response', err)
                responseHelper.sendResponse(req, err, res);
            } else {
                const payload = proto.create(data);
                const bufferResponse = proto.encode(payload).finish();
                return res
                    .status(httpStatus.OK)
                    .set('Content-Type', 'application/protobuf')
                    .send(bufferResponse);
            }
        } catch (error) {
            console.error(req.metaData, 'error from send response', err)
            responseHelper.sendResponse(req, err, res);
        }
    }

    responseHelper.createBufferResponse = (data, proto) => {
        try {
            const payload = proto.create(data);
            const bufferResponse = proto.encode(payload).finish();
            return bufferResponse;
        } catch (error) {
            throw error
        }
    }

    responseHelper.sendResponse = (req, err, res, data, proto) => {
        proto = proto || bfi.common.Response
        try {
            if (err || !data) {
                proto = bfi.common.Response
                data = { status: httpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' }
            }
            if (!data.status || !httpStatusArrayLists.httpStatus.includes(data.status)) {
                data.status = httpStatus.INTERNAL_SERVER_ERROR
            }
            const bufferResponse = responseHelper.createBufferResponse(data, proto)
            data.status === httpStatus.INTERNAL_SERVER_ERROR ? console.error(req.metaData, err, req.url, 'response.helper') : console.info(req.metaData, data, req.url, 'response.helper')
            return res
                .status(data.status)
                .set('Content-Type', 'application/protobuf')
                .send(bufferResponse);
        } catch (error) {
            data = { status: httpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' }
            const bufferResponse = responseHelper.createBufferResponse(data, proto)
            console.error(req.metaData, 'response.helper', error)
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .set('Content-Type', 'application/protobuf')
                .send(bufferResponse);
        }
    }
})(module.exports);