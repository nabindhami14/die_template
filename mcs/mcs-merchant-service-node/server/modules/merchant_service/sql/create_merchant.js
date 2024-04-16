'use strict';


const { mysqlHelperReadonly, keyHelper, mysqlHelper } = require('common/helpers');

module.exports = async (name, authType) => {
    try {
        let response = { data: {} };
        const query = mysqlHelper.format(`INSERT INTO merchants (name, authType) VALUES (?, ?)`,[name,authType])

        let [dbResponse] = await mysqlHelper.query(query);
        if (dbResponse && dbResponse.length > 0) {
            response.data = keyHelper.keysToCamel(dbResponse[0])
        }
        return response;
    } catch (error) {
        console.log('error is ', error);
        throw error;
    }
}