(() => {
    const sql = require("../sql")
    module.exports = async (call, callback) => {
        const { merchantId } = call.request

        try {
            const res = await sql.getMerchant(merchantId)
            if (!res.data.id) {
                return callback(null, { status: 404, success: false, message: "Merchant doesn't exists with this id" });

            } else {
                callback(null, { status: 200, merchant: res.data })
            }


        } catch (error) {
            callback(error)
        }

    }
})()

