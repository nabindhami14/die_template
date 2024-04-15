(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
        const { id } = call.request

        try {
            const res = await sql.getCustomer(id)

            callback(null, {
                status: 200,
                customer: res.data
            })
            
        } catch (error) {
            callback(error)
        }

    }
})()


