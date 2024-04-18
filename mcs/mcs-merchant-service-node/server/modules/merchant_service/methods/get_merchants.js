(() => {
    const sql = require("../sql");

    module.exports = async (call, callback) => {
        const { id } = call.request;

        const authPayloadMap = {
            "BASIC": 0,
            "OAUTH2": 1,
            "JWT": 2
        }

        try {
            const res = await sql.getMerchants();

            const merchants = res.data.map(merchant => ({
                id: merchant.id,
                name: merchant.name,
                auth_type: authPayloadMap[merchant.authType],
                createdAt: merchant.createdAt,
                updatedAt: merchant.updatedAt
            }));

            callback(null, { status: 200, merchants });
        } catch (error) {
            callback(error);
        }
    };
})();
