const { mysqlHelperReadonly, keyHelper } = require('common/helpers');

module.exports = async (merchant, senderId, receiverId, amount, remark, columns, values) => {
    try {
        const query = `INSERT INTO ${merchant} (senderId, receiverId, amount, remark, ${columns}) VALUES (?, ?, ?, ?, ${values.map(() => '?').join(',')})`;
        const params = [senderId, receiverId, amount, remark, ...values];

        const [dbResponse] = await mysqlHelperReadonly.query(query, params);

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
