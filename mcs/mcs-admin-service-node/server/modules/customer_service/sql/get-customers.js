'use strict';


const { mysqlHelperReadonly, keyHelper } = require('common/helpers');


module.exports = async () => {

    try {
        let response = { data: {} };
        const query = mysqlHelperReadonly.format(`select id,name,email,address,phone_number from customers`)

        let [dbResponse] = await mysqlHelperReadonly.query(query);
        if (dbResponse && dbResponse.length > 0) {
            response.data = keyHelper.keysToCamel(dbResponse)
        }
        return response;
    } catch (error) {
        console.log('error is ', error);
        throw error;
    }
}