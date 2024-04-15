(() => {
    const sql = require("../sql")

    module.exports = async (call, callback) => {
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

            console.log(message);
            callback(null, {
                status: 200,
                data: message
            })
            
        } catch (error) {
            callback(error)
        }

    }
})()


