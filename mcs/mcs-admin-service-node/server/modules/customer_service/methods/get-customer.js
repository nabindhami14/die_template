(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
        const { id, customerId } = call.request;


        try {
            const res = await sql.getCustomer(customerId)
            callback(null, { status: 200, customer: res.data })
        } catch (error) {
            callback(error)
        }

    }
})()


