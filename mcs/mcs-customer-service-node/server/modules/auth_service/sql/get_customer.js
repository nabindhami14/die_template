'use strict';


const { mysqlHelperReadonly, keyHelper } = require('common/helpers');


module.exports = async (id) => {

    try {
        let response = { data: {} };
        const query = mysqlHelperReadonly.format(`select * from customer where id = ?`, id)

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