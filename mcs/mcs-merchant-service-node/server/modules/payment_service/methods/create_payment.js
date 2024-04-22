(() => {
    const sql = require("../sql");
    const db = require("../../merchant_service/sql");
    const { mysqlHelper } = require('common/helpers');

    module.exports = async (call, callback) => {

        try {
            const { merchantId, senderId, authType, paymentDetails, credentials } = call.request;
            const { receiverId, amount, remark } = paymentDetails;
            const { username, password, accessToken, token } = credentials;

            // Retrieve merchant details
            const merchant = await db.getMerchant(merchantId);

            // Determine columns and values based on authType
            let columns, values;
            switch (authType) {
                case 0: // BASIC
                    columns = "username,password";
                    values = [username, password];
                    break;
                case 1: // OAUTH2
                    columns = "accessToken";
                    values = [accessToken];
                    break;
                case 2: // JWT
                    columns = "token";
                    values = [token];
                    break;
                default:
                    throw new Error("Invalid authType");
            }

            // Retrieve sender and receiver details
            const sender = await sql.getCustomer(senderId);
            const receiver = await sql.getCustomer(receiverId);

            // Check if sender has sufficient balance
            if (sender.data && receiver.data && +sender.data.money > +amount) {
                // Begin transaction
                await mysqlHelper.beginTransaction();

                // Deduct amount from sender and add to receiver
                await sql.moneyOperation(senderId, amount);
                await sql.moneyOperation(receiverId, amount, "add");

                // Create payment record
                await sql.createPayment(merchant.data.name, senderId, receiverId, amount, remark, columns, values);

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
