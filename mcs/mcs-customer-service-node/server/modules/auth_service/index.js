(() => {
    module.exports = {
        // handleLoginAuth: require('./methods/login_auth'),
        // handleLogOut: require('./methods/logout'),
        // clearLoginSessionByUserId: require('./methods/logout_user_by_id'),
        // clearLoginSessionByProfileId: require('./methods/logout_by_profile'),
        // customerLoginStatus: require('./methods/customer_login_status')
        regsiterCustomer: require("./methods/register_customer"),
        customerProfile: require("./methods/customer_profile")
    };
})();