(() => {
    const sql = require("../sql")
    const { mysqlHelper } = require('common/helpers');

    module.exports = async (call, callback) => {

        try {
            const authTypes = await sql.getAuthTypes();
            callback(null, { status: 200, authTypes: authTypes.data })
        } catch (error) {
            callback(error)
        }

    }
})()

