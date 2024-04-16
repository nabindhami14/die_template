

(() => {
  module.exports = {
    getCustomer: require("./get_customer"),
    getCustomers: require("./get-customers"),

    // CUSTOMER BULK UPLOAD
    createCustomer: require("./create_customer"),

  };
})();