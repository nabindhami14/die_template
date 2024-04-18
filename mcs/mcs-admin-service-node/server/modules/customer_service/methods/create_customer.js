(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
        const { name, email, address, phone_number, password, money } = call.request


        try {
            await sql.createCustomer(name, email, address, phone_number, password,money)
            callback(null, { status: 200, message: "WE RAY" })
        } catch (error) {
            callback(error)
        }

    }
})()

