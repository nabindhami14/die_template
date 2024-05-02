(() => {
    const sql = require("../sql")
    const { mysqlHelper } = require('common/helpers');

    module.exports = async (call, callback) => {
        const { merchantId } = call.request

        try {
            const res = await sql.getMerchant(merchantId)
            if (!res.data.id) {
                return callback(null, { status: 404, success: false, message: "Merchant doesn't exists with this id" });
            } else {
                const parameters = {};
                const q = await mysqlHelper.query(`SHOW COLUMNS FROM ${res.data.name}`);
                for (const column of q[0]) {
                    parameters[column.Field] = column.Type;
                }
                callback(null, { status: 200, message: "", parameters })
            }
        } catch (error) {
            callback(error)
        }

    }
})()

