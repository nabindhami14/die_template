(() => {
    const sql = require("../sql");
    const { mysqlHelper } = require('common/helpers');

    function generateSQLCreateTableQuery(tableName, parameters) {
        const dataTypeMap = {
            int: 'INT',
            string: 'VARCHAR(255)',
            float: 'FLOAT',
        };

        let columns = '';

        columns += 'id INT AUTO_INCREMENT PRIMARY KEY ';

        // Adding columns from parameters
        for (const [paramName, paramType] of Object.entries(parameters)) {
            const sqlType = dataTypeMap[paramType.toLowerCase()];
            if (sqlType) {
                columns += `, ${paramName} ${sqlType}`;
            } else {
                console.error(`Unknown data type: ${paramType} for parameter ${paramName}`);
            }
        }

        return `CREATE TABLE ${tableName} (
            ${columns}
        );`;
    }

    module.exports = async (call, callback) => {
        const { name, parameters } = call.request
        
        try {
        const authType = await sql.getAuthTypeByName(name);
        if (authType.data.id) {
            return callback(null, { status: 400, success: false, message: "Auth type already exists with this name" });
        }

        await mysqlHelper.beginTransaction();
        const query = generateSQLCreateTableQuery(name, parameters)

            await sql.createAuthType(name);
            await sql.createAuthTypeTable(query);
            await mysqlHelper.commit();
            return callback(null, { status: 200, success: true, message: "Successfully created" });
        } catch (error) {
            await mysqlHelper.rollback();
            callback(error);
        }
    };
})();
