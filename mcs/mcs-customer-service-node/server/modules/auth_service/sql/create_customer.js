'use strict';


const { mysqlHelperReadonly, keyHelper } = require('common/helpers');


module.exports = async (name, email, adress, phone_number) => {

    try {
        let response = { data: {} };
        // TODO : NEED TO CALL FROM CLIENT
        const query = mysqlHelperReadonly.format(`insert into customer (name,email,address,phone_number) values (?,?,?,?)`, [name, email, adress, phone_number])

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