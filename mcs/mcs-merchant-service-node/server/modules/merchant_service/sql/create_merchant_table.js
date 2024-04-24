'use strict';


const { keyHelper, mysqlHelper } = require('common/helpers');


module.exports = async (query) => {
    try {
        let response = { data: {} };

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