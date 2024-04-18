(() => {

    const { cbs } = require('proto/bundle');
    const { grpcMetaHelper, grpcClientHelper } = require('common/helpers');
    const client = require('client/admin_client').getClient();
    const { responseHelper, requestHelper } = require('../../../helpers');
    

    module.exports = async (req, res, next) => {
        const meta = grpcMetaHelper.setMetadata(req.metaData)

        
        const payload = requestHelper(req, res, cbs.admin_service.GetCustomersRequest)
        
        // THIS WORKS
        // payload.id = req.user.id;

        if (payload.status) {
            return responseHelper.sendResponse(req, '', res, payload)
        }

        try {
            client.getCustomers(payload, meta, grpcClientHelper.setTimeOut(), (err, response) => {
                if (err) {
                    return responseHelper.sendErrorResponse(err, res, req.metaData);
                }
  
                return responseHelper.sendSuccessResponse(response.status, response, cbs.common.Response, res);
            });
        } catch (err) {
            console.error(req.metaData, '[ADMIN:GET_CUSTOMERS]', err);
            return responseHelper.sendErrorResponse(err, res, req.metaData);
        }
    }
})();