(() => {
    const sql = require("../sql")
    const { passwordHelper, jwtHelper } = require('common/helpers');

    module.exports = async (call, callback) => {
        const { email, password } = call.request

        try {
            const response = await sql.getCustomerByEmail(email)
            if (!response.data.id) {
                return callback(null, { status: 404, message: "No customer found with this email" })
            }
            const isMatch = await passwordHelper.comparePasssword(password, response.data.password)
            if (!isMatch) {
                return callback(null, { status: 400, message: "Credentials don't match" })
            }
            const tokens = await jwtHelper.generateTokens({ id: response.data.id, email: response.data.email })

            callback(null, { status: 200, tokens })
        } catch (error) {
            callback(error)
        }

    }
})()


