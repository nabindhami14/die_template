(() => {
    module.exports = async (call, callback) => {
        callback(null, { status: 200, message: "Hello World!!" })
    }
})()


