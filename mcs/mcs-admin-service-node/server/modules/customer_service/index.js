(() => {
    module.exports = {
        customerBulkUpload: require("./methods/customer_bulk_upload"),
        getCustomer: require("./methods/customer"),
        getCustomers: require("./methods/customers")
    };
})();