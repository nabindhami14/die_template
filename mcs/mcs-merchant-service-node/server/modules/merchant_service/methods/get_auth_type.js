(() => {
    const sql = require("../sql")
    const { mysqlHelper } = require('common/helpers');
    module.exports = async (call, callback) => {
        const { authtypeId } = call.request;
        try {
            const res = await sql.getAuthType(authtypeId)
            if (!res.data.id) {
                return callback(null, { status: 404, success: false, message: "Auth Type doesn't exists with this id" });
            } else {
                const name = res.data.name
                const q = await mysqlHelper.query(`SHOW COLUMNS FROM ${name}`);
                const parameters = {};
                for (const column of q[0]) {
                    parameters[column.Field] = column.Type;
                }
                callback(null, { status: 200, parameters })
            }
        } catch (error) {
            callback(error)
        }
    }
})()

