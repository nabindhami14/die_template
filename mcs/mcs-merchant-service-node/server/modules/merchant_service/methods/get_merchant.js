(() => {
    // const sql = require("../sql")
    module.exports = async (call, callback) => {
        console.log(call.request);


        try {
            callback(null, { status: 200, merchant: {} })
        } catch (error) {
            callback(error)
        }

    }
})()

