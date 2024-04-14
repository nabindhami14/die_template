(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
        console.log("CALLLLLLLLLLLLL", call.request);
        const { id } = call.request

        try {
            const customer = await sql.getCustomer(id)
            const message = {
                id: customer.data.id,
                name: customer.data.name,
                email: customer.data.email,
                address: customer.data.address,
                phone_number: customer.data.phoneNumber,
            }

            callback(null, {
                status: 200,
                data: message
            })
        } catch (error) {
            callback(error)
        }

    }
})()


