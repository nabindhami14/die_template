(() => {
    module.exports = {
        Register: require("./methods/register_customer"),
        Login: require("./methods/login_customer"),
        Get: require("./methods/get_customer")
    }
})()