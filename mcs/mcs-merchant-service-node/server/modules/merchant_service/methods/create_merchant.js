(() => {
    const sql = require("../sql")
    module.exports = async (call, callback) => {

        const { name, auth_type } = call.request;

        const authPayloadMap = {
            0 :"BASIC",
            1 : "OAUTH2",
            2 : "JWT"
        }

        try {
            if (auth_type === 0) {
                const authPayload = `username VARCHAR(255), password VARCHAR(255)`

                await sql.createMerchantTable(name, authPayload)
                await sql.createMerchant(name, authPayloadMap[0])

                return callback(null, { status: 200, success: true });
            } else if (auth_type === 1) {
                const authPayload = `access_token VARCHAR(255)`

                await sql.createMerchantTable(name, authPayload)
                await sql.createMerchant(name, authPayloadMap[1])
                return callback(null, { status: 200, success: true });
            } else {
                const authPayload = `token VARCHAR(255)`

                await sql.createMerchantTable(name, authPayload)
                await sql.createMerchant(name, authPayloadMap[2])
                return callback(null, { status: 200, success: true });
            }
        } catch (error) {
            callback(error);
        }
    };

})()

