(() => {
    const sql = require("../sql");
    const { mysqlHelper } = require('common/helpers');


    function generateCreateTableQuery(tableName, tableDefinition) {
        let query = `CREATE TABLE ${tableName} (\n`;
    
        let isFirstColumn = true;
        for (const [columnName, columnType] of Object.entries(tableDefinition)) {
            if (isFirstColumn) {
                // If it's the first column, include the id column with auto-increment
                query += `
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    senderId INT,
                    receiverId INT,
                    FOREIGN KEY (senderId) REFERENCES customers(id),
                    FOREIGN KEY (receiverId) REFERENCES customers(id),
                    amount DECIMAL(10, 2),
                    remark VARCHAR(50),
                `;
    
                isFirstColumn = false;
                continue;
            }
            query += `    ${columnName} ${columnType},\n`;
        }
    
        // Add created_at and updated_at columns
        query += `    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP \n`;
    
        // Remove the trailing comma and newline
        query = query.slice(0, -2) + '\n';
    
        query += ');';
        return query;
    }
    

    module.exports = async (call, callback) => {
        const { name, authType } = call.request;

        try {
            const merchant = await sql.getMerchantByName(name);
            if (merchant.data.id) {
                return callback(null, { status: 400, success: false, message: "Merchant already exists with this name" });
            }

            const parameters = {};
            try {
                const q = await mysqlHelper.query(`SHOW COLUMNS FROM ${authType}`);
                for (const column of q[0]) {
                    parameters[column.Field] = column.Type;
                }
            } catch (error) {
                return callback(null, { status: 404, success: false, message: "Auth type doesn't exists" });
            }

            await mysqlHelper.beginTransaction();
            const query = generateCreateTableQuery(name, parameters)
            await sql.createMerchantTable(query);
            await sql.createMerchant(name, authType);
            await mysqlHelper.commit();
            return callback(null, { status: 200, success: true, message: "Successfully created" });
        } catch (error) {
            await mysqlHelper.rollback(); // Rollback the transaction
            callback(error);
        }
    };
})();
