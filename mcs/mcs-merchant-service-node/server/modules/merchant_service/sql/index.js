
(() => {
  module.exports = {
    createMerchantTable: require("./create_merchant_table"),
    createMerchant: require("./create_merchant"),
    getMerchants: require("./get_merchants"),
    getMerchant: require("./get_merchant"),
    getMerchantByName: require("./get_merchant_by_name"),

    // 
    getAuthTypeByName: require("./get_auth_type_by_name"),
    createAuthTypeTable: require("./create_auth_type_table"),

    createAuthType: require("./create_auth_type"),
    getAuthType: require("./get_auth_type")

  };
})();