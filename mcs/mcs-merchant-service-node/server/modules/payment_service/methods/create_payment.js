(() => {
    const sql = require("../sql");
    const db = require("../../merchant_service/sql");
    const { mysqlHelper } = require('common/helpers');

    module.exports = async (call, callback) => {

        try {
            const { merchant_id, sender_id, auth_type, payment_details, credentials } = call.request;
            const { receiver_id, amount, remark } = payment_details;
            const { username, password, access_token, token } = credentials;

            // Retrieve merchant details
            const merchant = await db.getMerchant(merchant_id);

            // Determine columns and values based on auth_type
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

            // Retrieve sender and receiver details
            const sender = await sql.getCustomer(sender_id);
            const receiver = await sql.getCustomer(receiver_id);

            // Check if sender has sufficient balance
            if (sender.data && receiver.data && +sender.data.money > +amount) {
                // Begin transaction
                await mysqlHelper.beginTransaction();

                // Deduct amount from sender and add to receiver
                await sql.moneyOperation(sender_id, amount);
                await sql.moneyOperation(receiver_id, amount, "add");

                // Create payment record
                await sql.createPayment(merchant.data.name, sender_id, receiver_id, amount, remark, columns, values);

                // Commit transaction
                await mysqlHelper.commit();

                callback(null, { status: 200, success: true });
            } else {
                callback(null, { status: 400, success: false, message: "Insufficient balance" });
            }
        } catch (error) {
            console.error("[PAYMENT: PROCESSING PAYMENT]", error);
            await mysqlHelper.rollback(); // Rollback the transaction
            callback(error);
        }
    };
})();
