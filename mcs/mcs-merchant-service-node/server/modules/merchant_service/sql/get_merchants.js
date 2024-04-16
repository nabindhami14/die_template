'use strict';


const { mysqlHelperReadonly, keyHelper } = require('common/helpers');

module.exports = async () => {
    try {
        let response = { data: {} };
        const query = mysqlHelperReadonly.format(`SELECT * FROM merchants`)

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