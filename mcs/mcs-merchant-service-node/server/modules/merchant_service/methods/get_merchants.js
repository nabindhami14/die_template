(() => {
    const sql = require("../sql")
    module.exports = async (call, callback) => {
        const { id } = call.request


        try {
            const res = await sql.getMerchants()

            callback(null, { status: 200, merchants: res.data })
        } catch (error) {
            callback(error)
        }

    }
})()

