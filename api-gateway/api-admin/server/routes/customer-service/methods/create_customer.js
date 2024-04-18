(() => {
    // const HTTPStatus = require('http-status');

    const { cbs } = require('proto/bundle');
    const { grpcMetaHelper, grpcClientHelper } = require('common/helpers');
    const client = require('client/admin_client').getClient();
    const { responseHelper, requestHelper } = require('../../../../../api-customer/server/helpers');

    module.exports = async (req, res, next) => {
        const meta = grpcMetaHelper.setMetadata(req.metaData)

        const payload = requestHelper(req, res, cbs.admin_service.CreateCustomerRequest)
        if (payload.status) {
            return responseHelper.sendResponse(req, '', res, payload)
        }

        try {
            client.createCustomer(payload, meta, grpcClientHelper.setTimeOut(), (err, response) => {
                if (err) {
                    return responseHelper.sendErrorResponse(err, res, req.metaData);
                }
                return responseHelper.sendSuccessResponse(response.status, response, cbs.common.Response, res);
            });
        } catch (err) {
            console.error(req.metaData, '[CUSTOMER REGISTER]', err);
            return responseHelper.sendErrorResponse(err, res, req.metaData);
        }
    }
})();