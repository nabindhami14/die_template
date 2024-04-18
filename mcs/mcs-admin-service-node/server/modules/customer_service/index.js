(() => {
    module.exports = {
        customerBulkUpload: require("./methods/customer_bulk_upload"),
        getCustomer: require("./methods/get-customer"),
        getCustomers: require("./methods/get-customers")
    };
})();