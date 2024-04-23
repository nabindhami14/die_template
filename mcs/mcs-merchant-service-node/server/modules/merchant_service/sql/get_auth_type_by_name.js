'use strict';


const { mysqlHelperReadonly, keyHelper } = require('common/helpers');

module.exports = async (name) => {
    try {
        let response = { data: {} };
        const query = mysqlHelperReadonly.format(`SELECT * FROM auth_type WHERE name = ?`, name)

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