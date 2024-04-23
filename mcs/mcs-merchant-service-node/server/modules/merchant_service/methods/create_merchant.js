(() => {
    const sql = require("../sql");
    const { mysqlHelper } = require('common/helpers');

    module.exports = async (call, callback) => {
        const { name, authType } = call.request;

        const merchant = await sql.getMerchantByName(name);
        if (merchant.data.id) {
            return callback(null, { status: 400, success: false, message: "Merchant already exists with this name" });
        }

        const authPayloadMap = {
            0: "BASIC",
            1: "OAUTH2",
            2: "JWT"
        };

        try {
            const authPayloads = {
                0: "username VARCHAR(255), password VARCHAR(255)",
                1: "accessToken VARCHAR(255)",
                2: "token VARCHAR(255)"
            };

            await mysqlHelper.beginTransaction();
            const authPayload = authPayloads[authType];
            await sql.createMerchantTable(name, authPayload);
            await sql.createMerchant(name, authPayloadMap[authType]);
            await mysqlHelper.commit();
            return callback(null, { status: 200, success: true, message: "Successfully created" });
        } catch (error) {
            await mysqlHelper.rollback(); // Rollback the transaction
            callback(error);
        }
    };
})();
