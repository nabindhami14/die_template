(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
        const { name, email, address, phoneNumber, password, money } = call.request


        try {
            await sql.createCustomer(name, email, address, phoneNumber, password,money)
            callback(null, { status: 200, message: "WE RAY" })
        } catch (error) {
            callback(error)
        }

    }
})()


