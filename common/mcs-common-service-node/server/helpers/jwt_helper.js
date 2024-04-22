
((jwtHelper) => {
    const jwt = require("jsonwebtoken")

    jwtHelper.generateTokens = async (payload) => {
        const accessToken = jwt.sign(payload, "ACCESS_TOKEN_SECERT", { expiresIn: "1d" })
        const refreshToken = jwt.sign(payload, "REFRESH_TOKEN_SECERT", { expiresIn: "7d" })

        return { accessToken, refreshToken }
    }
    jwtHelper.verifyAccessToken = async (token) => {
        const decoded = jwt.verify(token, "ACCESS_TOKEN_SECERT")
        return decoded
    }
})(module.exports)