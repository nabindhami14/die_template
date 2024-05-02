const { mysqlHelperReadonly, keyHelper } = require('common/helpers');

module.exports = async (query) => {
    try {
        const [dbResponse] = await mysqlHelperReadonly.query(query);
        const response = { data: {} };
        if (dbResponse && dbResponse.length > 0) {
            response.data = keyHelper.keysToCamel(dbResponse[0]);
        }
        return true;
    } catch (error) {
        console.log('error is ', error);
        throw error;
    }
};
