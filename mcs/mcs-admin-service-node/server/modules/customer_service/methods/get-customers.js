(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
        console.log(call.request);

        try {
            const res = await sql.getCustomers()
            callback(null, { status: 200, customers: res.data })
        } catch (error) {
            callback(error)
        }

    }
})()


