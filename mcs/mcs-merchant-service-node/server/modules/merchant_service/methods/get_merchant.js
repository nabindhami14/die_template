(() => {
    const sql = require("../sql")
    module.exports = async (call, callback) => {
        const { merchantId } = call.request


        try {
            const res = await sql.getMerchant(merchantId)
            callback(null, { status: 200, merchant: res.data })
        } catch (error) {
            callback(error)
        }

    }
})()

