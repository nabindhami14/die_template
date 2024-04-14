(() => {
    const HTTPStatus = require("http-status");
    const {
        redisHelper,
        messageHelper,
    } = require("common/helpers");
    
    const sql = require("../sql");
    const moduleConfig = require("../config");

    const logoutHelper = {
        callbackHelper: (callback, status, message) => {
            return callback(null, { status: status, message: message });
        },
        logActivity: async (metaObj) => {
            try {
                let payload = {
                    userId: +metaObj.userId,
                    logTime: `${new Date()}`,
                    activity: "Logout Successfully",
                    keyword: "L S",
                    userType: "customer",
                };

                return messageHelper.sendToQueue("reporting", "", payload, metaObj);
            } catch (error) {
                throw error;
            }
        },
    };

    module.exports = async (call, callback) => {
        try {
            const deleteLoginSessionRes = await sql.deleteLoginSessionByUserId(
                call.request.metaData.userId
            );
            if (!deleteLoginSessionRes) {
                return logoutHelper.callbackHelper(
                    callback,
                    HTTPStatus.NOT_MODIFIED,
                    moduleConfig.message.logoutFaild
                );
            }
            redisHelper.clearCacheKeys(
                call.request.metaData.token,
                call.request.metaData.debugId
            );
            logoutHelper.logActivity(call.request.metaData);
            return logoutHelper.callbackHelper(
                callback,
                HTTPStatus.OK,
                moduleConfig.message.logoutSuccess
            );
        } catch (error) {
            return callback(error);
        }
    };
})();