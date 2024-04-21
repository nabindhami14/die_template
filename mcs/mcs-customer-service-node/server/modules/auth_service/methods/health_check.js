(() => {
    module.exports = async (call, callback) => {
        console.log("CALL REQUEST", call.request);
        callback(null, { status: 200, message: "Hello World!!" })
    }
})()


