(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
        const { name, email, address, phone_number } = call.request

        try {
            await sql.createCustomer(name, email, address, phone_number)
            callback(null, { status: 200, message: "WWE RAY" })
        } catch (error) {
            callback(error)
        }

    }
})()


