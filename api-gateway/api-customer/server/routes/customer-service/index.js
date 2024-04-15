(() => {
    module.exports = {
        Register: require("./methods/register_customer"),
        Login: require("./methods/login_customer"),
        Profile: require("./methods/customer_profile")
    }
})()