(() => {
    const sql = require("../sql");
    const db = require("../../merchant_service/sql");
    const { mysqlHelper } = require('common/helpers');

    module.exports = async (call, callback) => {
        const { merchantName, ...fields } = call.request;

        try {
            const param = {};
            const q = await mysqlHelper.query(`SHOW COLUMNS FROM ${merchantName}`);
            // Exclude unwanted fields and populate param object
            for (const column of q[0]) {
                if (['id', 'created_at', 'updated_at'].includes(column.Field)) {
                    continue; // Skip unwanted fields
                } else if (['senderId', 'receiverId'].includes(column.Field)) {
                    param[column.Field] = parseInt(fields.parameters[column.Field]);
                } else if (['amount'].includes(column.Field)) {
                    param[column.Field] = parseFloat(fields.parameters[column.Field]);
                } else {
                    param[column.Field] = fields.parameters[column.Field]
                }
            }
            const columns  = Object.keys(param).join(', ');
            const values = Object.values(param).map(value => typeof value === 'number' ? value : `'${value}'`).join(', ');

            const query = `INSERT INTO ${merchantName} (${columns}) VALUES (${values});`;

            const sender = await sql.getCustomer(param['senderId'])
            const receiver = await sql.getCustomer(param['receiverId'])

            // Check if sender has sufficient balance
            if (sender.data && receiver.data && +sender.data.money > param['amount']) {
                // Begin transaction
                await mysqlHelper.beginTransaction();

                // Deduct amount from sender and add to receiver
                await sql.moneyOperation(param['senderId'], param['amount']);
                await sql.moneyOperation(param['receiverId'], param['amount'], "add");


                // Create payment record
                await sql.createPayment(query);

                // Commit transaction
                await mysqlHelper.commit();

                return callback(null, { status: 200, success: true });
            }

            callback(null, { status: 400, success: false, message: "Insufficient balance" });
        } catch (error) {
            console.error("[PAYMENT: PROCESSING PAYMENT]", error);
            await mysqlHelper.rollback();
            callback(error);
        }
    };
})();
