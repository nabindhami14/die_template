(() => {
    const fs = require('fs');
    const path = require('path');
    const csv = require('csv-parser');

    const sql = require("../sql")


    module.exports = async (call, callback) => {
        const csvPath = (path.join(__dirname, "data.csv"));

        try {
            fs.createReadStream(csvPath)
                .pipe(csv())
                .on('data', async (row) => {
                    const { name, email, adress, phone_number, password } = row
                    await sql.createCustomer(name, email, adress, phone_number, password)
                })
                .on('end', () => {
                    console.log('BULK UPLOAD SUCCESSFULL.');
                    return callback(null, { status: 200, message: "BULK UPLOAD SUCCESSFUL" })
                })
                .on('error', (error) => {
                    console.error('[ERROR WHILE PARSING CSV]:', error.message);
                    return callback(error)
                });
        } catch (error) {
            callback(error)
        }

    }
})()


