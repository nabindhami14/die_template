(() => {
    // const sql = require("../sql")
    const client = require('client/customer_auth_client').getClient();

    module.exports = async (call, callback) => {


        console.log(client);
        try {
            callback(null, { status: 200, message: "BULK UPLOAD SUCCESSFUL" })
        } catch (error) {
            callback(error)
        }

    }
})()


