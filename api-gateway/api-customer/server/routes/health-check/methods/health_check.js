(() => {
    const { cbs } = require('proto/bundle');
    const { grpcMetaHelper, grpcClientHelper } = require('common/helpers');
    const client = require('client/customer_auth_client').getClient();
    const { responseHelper, requestHelper } = require('../../../helpers');

    module.exports = async (req, res, next) => {
        const meta = grpcMetaHelper.setMetadata(req.metaData)

        const payload = requestHelper(req, res, cbs.customer_auth_service.HealthCheckRequest)
        if (payload.status) {
            return responseHelper.sendResponse(req, '', res, payload)
        }

        try {
            client.healthCheck(payload, meta, grpcClientHelper.setTimeOut(), (err, response) => {
                if (err) {
                    return responseHelper.sendErrorResponse(err, res, req.metaData);
                }

                return responseHelper.sendSuccessResponse(response.status, response, cbs.customer_auth_service.HealthCheckResponse, res);
            });
        } catch (err) {
            console.error(req.metaData, '[HEATLTH CHECK]', err);
            return responseHelper.sendErrorResponse(err, res, req.metaData);
        }
    }
})();