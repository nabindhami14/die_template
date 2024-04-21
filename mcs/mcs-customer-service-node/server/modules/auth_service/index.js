(() => {
    module.exports = {
        healthCheck: require("./methods/health_check"),
        loginCustomer: require("./methods/login_customer"),
        customerProfile: require("./methods/customer_profile")
    };
})();