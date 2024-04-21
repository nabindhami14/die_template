'use strict';


const { mysqlHelperReadonly, keyHelper } = require('common/helpers');
module.exports = async (email) => {

    try {
        let response = { data: {} };
        const query = mysqlHelperReadonly.format(`select * from admins where email = ?`, email)

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