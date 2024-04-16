'use strict';


const { mysqlHelperReadonly, keyHelper, mysqlHelper } = require('common/helpers');


module.exports = async (name, authPayload) => {
    try {
        let response = { data: {} };
        const query = mysqlHelper.format(`CREATE TABLE ${name} ( id INT AUTO_INCREMENT PRIMARY KEY,senderId VARCHAR(255),receiverId VARCHAR(255),amount DECIMAL(10, 2),remark VARCHAR(50), ${authPayload} ,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`)

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