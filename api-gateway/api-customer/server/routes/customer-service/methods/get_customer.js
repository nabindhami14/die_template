(() => {
    // const HTTPStatus = require('http-status');

    const { cbs } = require('proto/bundle');
    const { grpcMetaHelper, grpcClientHelper } = require('common/helpers');
    const client = require('client/customer_auth_client').getClient();
    const { responseHelper, requestHelper } = require('../../../helpers');

    module.exports = async (req, res, next) => {
        const meta = grpcMetaHelper.setMetadata(req.metaData)

        const payload = requestHelper(req, res, cbs.customer_auth_service.GetRequest)
        if (payload.status) {
            return responseHelper.sendResponse(req, '', res, payload)
        }

        try {
            client.getCustomer(payload, meta, grpcClientHelper.setTimeOut(), (err, response) => {
                if (err) {
                    return responseHelper.sendErrorResponse(err, res, req.metaData);
                }
                return responseHelper.sendSuccessResponse(response.status, response, cbs.common.Response, res);
            });
        } catch (err) {
            console.error(req.metaData, 'error from getting_customer_profile', err);
            return responseHelper.sendErrorResponse(err, res, req.metaData);
        }
    }
})();