'use strict';

const { mysqlHelper, keyHelper } = require('common/helpers');

module.exports = async (id, amount, operation) => {
    try {
        const response = { data: {} };
        
        const query = mysqlHelper.format(`SELECT id, name, email, address, phone_number, money FROM customers WHERE id = ?`, id);
        const [dbResponse] = await mysqlHelper.query(query);

        if (dbResponse && dbResponse.length > 0) {
            const customer = keyHelper.keysToCamel(dbResponse[0]);

            let updatedMoney;
            if (operation === 'add') {
                updatedMoney = parseFloat(customer.money) + parseFloat(amount);
            } else {
                updatedMoney = parseFloat(customer.money) - parseFloat(amount);
            }

            const updateQuery = mysqlHelper.format(`UPDATE customers SET money = ? WHERE id = ?`, [updatedMoney, id]);
            await mysqlHelper.query(updateQuery);

            response.data = { ...customer, money: updatedMoney };
        } else {
            throw new Error('Customer not found');
        }

        return response;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
};
