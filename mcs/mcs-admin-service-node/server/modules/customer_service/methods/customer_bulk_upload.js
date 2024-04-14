(() => {
    // const sql = require("../sql")
    const client = require('client/customer_auth_client').getClient();

    module.exports = async (call, callback) => {

        try {
            // client.getCustomer({ id: 2 }, (err, res) => {
            //     if (err) { console.log(err); }
            //     else {
            //         console.log(res, "RESPONSSEEEEEEEEEE");
            //     }
            // })

            callback(null, { status: 200, message: "BULK UPLOAD SUCCESSFUL" })
        } catch (error) {
            callback(error)
        }

    }
})()


