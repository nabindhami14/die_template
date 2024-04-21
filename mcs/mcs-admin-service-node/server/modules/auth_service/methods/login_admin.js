(() => {
    const sql = require("../sql")
    const { passwordHelper, jwtHelper } = require('common/helpers');

    module.exports = async (call, callback) => {
        const { email, password } = call.request

        try {
            const response = await sql.getAdminByEmail(email)
            if (!response.data.id) {
                return callback(null, { status: 400, access_token: "INVALID", refresh_token: "INVALID" })
            }
            
            const isMatch = await passwordHelper.comparePasssword(password, response.data.password)
            if (!isMatch) {
                return callback(null, { status: 400, access_token: "INVALID", refresh_token: "INVALID" })
            }
            const tokens = await jwtHelper.generateTokens({ id: response.data.id })
            
            callback(null, { status: 200, tokens })
        } catch (error) {
            callback(error)
        }

    }
})()


