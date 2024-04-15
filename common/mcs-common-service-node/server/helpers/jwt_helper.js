
((jwtHelper) => {
    const jwt = require("jsonwebtoken")

    jwtHelper.generateTokens = async (payload) => {
        const access_token = jwt.sign(payload, "ACCESS_TOKEN_SECERT", { expiresIn: "1d" })
        const refresh_token = jwt.sign(payload, "REFRESH_TOKEN_SECERT", { expiresIn: "7d" })

        return { access_token, refresh_token }
    }
    jwtHelper.verifyAccessToken = async (token) => {
        const decoded = await jwt.verify(token, "ACCESS_TOKEN_SECERT")
        return decoded
    }
})(module.exports)