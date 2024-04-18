'use strict';


const { mysqlHelperReadonly, keyHelper, passwordHelper } = require('common/helpers');


module.exports = async (name, email, adress, phone_number, password, money) => {

    try {
        let response = { data: {} };
        const hashedPassword = await passwordHelper.generateHashPassword(password)

        const query = mysqlHelperReadonly.format(`insert into customers (name,email,address,phone_number,password,money) values (?,?,?,?,?,?)`, [name, email, adress, phone_number, hashedPassword, money])

        let [dbResponse] = await mysqlHelperReadonly.query(query);
        if (dbResponse && dbResponse.length > 0) {
            response.data = keyHelper.keysToCamel(dbResponse[0])
        }
        return response;
    } catch (error) {
        console.log('error is ', error);
        throw error;
    }
}