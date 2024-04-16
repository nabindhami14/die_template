(() => {
    module.exports = {
        createMerchant: require("./methods/create_merchant"),
        getMerchants: require("./methods/get_merchants"),
        getMerchant: require("./methods/get_merchant"),
    };
})();