(() => {
    const sql = require("../sql")
    module.exports = async (call, callback) => {
        const { merchantId } = call.request


        const authPayloadMap = {
           "BASIC" : 0,
            "OAUTH2" : 1,
            "JWT" : 2
        }

        
        try {
            const res = await sql.getMerchant(merchantId)
           

            callback(null, { status: 200, merchant: {
                id: res.data.id,
                name:res.data.name,    
                auth_type: authPayloadMap[res.data.authType],
                createdAt: res.data.createdAt,
                updatedAt: res.data.updatedAt
            } })
        } catch (error) {
            callback(error)
        }

    }
})()

