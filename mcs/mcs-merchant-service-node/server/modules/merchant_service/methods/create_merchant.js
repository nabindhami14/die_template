(() => {
    // const sql = require("../sql")
    module.exports = async (call, callback) => {

        const { name, senderId, receiverId, amount, remark, auth_type, basic_auth, oauth2_auth, jwt_auth } = call.request.merchant;

        try {
            if (auth_type === 0) {
                const { username, password } = basic_auth;
                console.log("BASIC AUTH", name, senderId, receiverId, amount, remark, "CREDENTIALS", username, password);
                return callback(null, { status: 200, success: true });
            } else  if (auth_type === 1) {
                const { access_token } = oauth2_auth;
                console.log("OAUTH2", name, senderId, receiverId, amount, remark, "ACCESS_TOKEN", access_token);
                return callback(null, { status: 200, success: true });
            } else {
                const { token } = jwt_auth;
                console.log("JWT AUTH", name, senderId, receiverId, amount, remark, "JWT_TOKEN", token);
                return callback(null, { status: 200, success: true });
            }
        } catch (error) {
            callback(error);
        }
    };

})()

