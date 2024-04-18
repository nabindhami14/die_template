

(() => {
  module.exports = {
    createCustomer: require("./create_customer"),
    loginCustomer: require("./login_customer"),
    getCustomer: require("./get_customer"),
    getCustomerByEmail:require("./get_customer_by_email")
  };
})();