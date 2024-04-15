(() => {
    const sql = require("../sql")
    const { passwordHelper, jwtHelper } = require('common/helpers');

    module.exports = async (call, callback) => {
        const { email, password } = call.request


        try {
            const response = await sql.getCustomerByEmail(email)
            const isMatch = await passwordHelper.comparePasssword(password, response.data.password)
            if (!isMatch) {
                return callback(null, { status: 400, access_token: "INVALID", refresh_token: "INVALID" })
            }
            const { access_token, refresh_token } = await jwtHelper.generateTokens({ id: response.data.id, email: response.data.email })
            console.log(access_token);

            callback(null, { status: 200, access_token, refresh_token })
        } catch (error) {
            callback(error)
        }

    }
})()


