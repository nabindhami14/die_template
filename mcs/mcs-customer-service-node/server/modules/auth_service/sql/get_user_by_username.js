'use strict';


const { databaseHelper, utilityHelper, mysqlHelperReadonly, keyHelper } = require('common/helpers');
module.exports = async (username, metaData) => {

    try {
        let response = { data: {} };
// TODO : NEED TO CALL FROM CLIENT
        const query = mysqlHelperReadonly.format(`select cu.id, cu.is_active, cu.status, cu.password, cp.allow_thirdparty_auth
                    from db_customer_user_service.customer_user as cu inner join db_customer_user_service.customer_profile as cp on cu.profile_id = cp.id  where mobile_number = ?`, username)

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