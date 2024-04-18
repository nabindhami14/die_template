(() => {
    const sql = require("../sql");
    const db = require("../../merchant_service/sql");

    const authPayloadMap = {
        0: "BASIC",
        1: "OAUTH2",
        2: "JWT"
    };

    module.exports = async (call, callback) => {
        try {
            const { merchant_id, auth_type, payment_details, credentials } = call.request;
            const { sender_id, receiver_id, amount, remark } = payment_details;
            const { username, password, access_token, token } = credentials;

            const merchant = await db.getMerchant(merchant_id);
            let columns, values;

            switch (auth_type) {
                case 0: // BASIC
                    columns = "username,password";
                    values = [username, password]; // Enclose values in an array
                    break;
                case 1: // OAUTH2
                    columns = "access_token";
                    values = [access_token];
                    break;
                case 2: // JWT
                    columns = "token";
                    values = [token];
                    break;
                default:
                    throw new Error("Invalid auth_type");
            }

            const res = await sql.createPayment(merchant.data.name, sender_id, receiver_id, amount, remark, columns, values);
            console.log(res);

            callback(null, { status: 200, success: true });
        } catch (error) {
            callback(error);
        }
    };
})();
