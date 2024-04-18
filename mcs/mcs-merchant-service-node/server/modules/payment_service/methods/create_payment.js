(() => {
    const sql = require("../sql");
    const db = require("../../merchant_service/sql");

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
                    values = [username, password];
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

            const sender = await sql.getCustomer(sender_id)
            const receiver = await sql.getCustomer(receiver_id)

            if (sender.data && receiver.data && +sender.data.money > +amount) {
                await sql.moneyOperation(sender_id, amount)
                await sql.moneyOperation(receiver_id, amount, "add")
                await sql.createPayment(merchant.data.name, sender_id, receiver_id, amount, remark, columns, values);

                callback(null, { status: 200, success: true });
            } else {
                callback({ message: "Insufficient amount of money!!" })
            }
        } catch (error) {
            callback(error);
        }
    };
})();
