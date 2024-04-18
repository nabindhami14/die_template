(() => {
    module.exports = {
        CreateCustomer: require("./methods/create_customer"),
        BulkUpload: require("./methods/bulk_upload"),

        // 
        GetCustomer: require("./methods/get_customer"),
        GetCustomers: require("./methods/get_customers"),
    }
})()