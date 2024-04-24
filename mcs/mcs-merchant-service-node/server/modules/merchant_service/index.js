
(() => {
    module.exports = {
        createMerchant: require("./methods/create_merchant"),
        getMerchants: require("./methods/get_merchants"),
        getMerchant: require("./methods/get_merchant"),



        createAuthType: require("./methods/create_auth_type"),
        getAuthType: require("./methods/get_auth_type"),
        getAuthTypes: require("./methods/get_auth_types")
    };
})();