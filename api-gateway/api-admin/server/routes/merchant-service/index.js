(() => {
    module.exports = {
        CreateAuthType: require("./methods/create_auth_type"),
        CreateMerchant: require("./methods/create_merchant"),
        GetMerchant: require("./methods/get_merchant"),
        GetMerchants: require("./methods/get_merchants"),
    }
})()