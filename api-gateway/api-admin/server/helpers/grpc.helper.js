(() => {
    const { grpcMetaHelper } = require('common/helpers');
    const httpStatus = require('http-status');
    const { bfi } = require('proto/bundle');
    const protoMappingConfig = require('../route.proto.mapping');

    const showLog = () => {
        return process.env.APP_ENV == 'development' || process.env.APP_ENV == 'testing' || process.env.APP_ENV == 'staging';
    };

    module.exports = (req, res, next) => {
        const { responseHelper, requestHelper } = require('./');

        try {
            if (!req.metaData.channel == 1 || !req.metaData.channel == 2) {
                return responseHelper.sendSuccessResponse(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    {
                        status: httpStatus.INTERNAL_SERVER_ERROR,
                        message: 'Channel not detected',
                    },
                    bfi.common.Response,
                    res
                );
            }
            const route = req.baseUrl + req.route.path;
            let client = protoMappingConfig[route][req.method]['client'].getClient();
            if (protoMappingConfig[route][req.method]['subclient']) {
                client = client[protoMappingConfig[route][req.method]['subclient']];
            }
            const payload = requestHelper(req, res, protoMappingConfig[route][req.method]['encode']);
            if (payload.status === httpStatus.BAD_REQUEST) {
                return responseHelper.sendSuccessResponse(payload.status, payload, bfi.common.Response, res);
            }
            const meta = grpcMetaHelper.setMetadata(req.metaData);
            let method = protoMappingConfig[route][req.method]['method'];
            if (method && method.includes('.')) {
                method = method.split('.');
                client[method[0]][method[1]](payload, meta, (err, response) => {
                    if (err) {
                        return responseHelper.sendSuccessResponse(
                            httpStatus.INTERNAL_SERVER_ERROR,
                            {
                                status: httpStatus.INTERNAL_SERVER_ERROR,
                                message: showLog() ? err.stack : 'Internal Server Error',
                            },
                            bfi.common.Response,
                            res
                        );
                    } client
                    let status = response.status || (response.response && response.response.status) || (response.meta && response.meta.status) || (response.meta && response.meta.response && response.meta.response.status) || httpStatus.OK;
                    return responseHelper.sendSuccessResponse(status, response, protoMappingConfig[route][req.method]['decode'], res, req);
                });
            } else {
                client[method](payload, meta, (err, response) => {
                    if (err) {
                        return responseHelper.sendSuccessResponse(
                            httpStatus.INTERNAL_SERVER_ERROR,
                            {
                                status: httpStatus.INTERNAL_SERVER_ERROR,
                                message: showLog() ? err.stack : 'Internal Server Error',
                            },
                            bfi.common.Response,
                            res
                        );
                    }
                    let status = response.status || (response.response && response.response.status) || (response.meta && response.meta.status) || (response.meta && response.meta.response && response.meta.response.status) || httpStatus.OK;
                    return responseHelper.sendSuccessResponse(status, response, protoMappingConfig[route][req.method]['decode'], res);
                });
            }
        } catch (err) {
            return responseHelper.sendSuccessResponse(
                httpStatus.INTERNAL_SERVER_ERROR,
                {
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    message: showLog() ? err.stack : 'Internal Server Error',
                },
                bfi.common.Response,
                res
            );
        }
    };
})();