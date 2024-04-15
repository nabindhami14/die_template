(() => {
    // const HTTPStatus = require('http-status');

    const { cbs } = require('proto/bundle');
    const { grpcMetaHelper, grpcClientHelper } = require('common/helpers');
    const client = require('client/customer_auth_client').getClient();
    const { responseHelper, requestHelper } = require('../../../helpers');

    module.exports = async (req, res, next) => {
        const meta = grpcMetaHelper.setMetadata(req.metaData)
        // req.body.id = req.user.id;

        const payload = requestHelper(req, res, cbs.customer_auth_service.CustomerProfileRequest)
        
        // THIS WORKS
        payload.id = req.user.id;
        if (payload.status) {
            return responseHelper.sendResponse(req, '', res, payload)
        }

        try {
            client.customerProfile(payload, meta, grpcClientHelper.setTimeOut(), (err, response) => {
                if (err) {
                    return responseHelper.sendErrorResponse(err, res, req.metaData);
                }
                return responseHelper.sendSuccessResponse(response.status, response, cbs.common.Response, res);
            });
        } catch (err) {
            console.error(req.metaData, '[CUSTOMER PROFILE]', err);
            return responseHelper.sendErrorResponse(err, res, req.metaData);
        }
    }
})();