(() => {
    const fs = require('fs');
    const path = require('path');
    const csv = require('csv-parser');

    const sql = require("../sql")
    const { fileUploadHelper } = require('common/helpers');


    module.exports = async (call, callback) => {
        const csvPath = path.join(__dirname, "../../../../../../", "public", call.request.filePath)

        try {
            fs.createReadStream(csvPath)
                .pipe(csv())
                .on('data', async (row) => {
                    const { name, email, address, phone_number, password } = row
                    await sql.createCustomer(name, email, address, phone_number, password)
                })
                .on('end', async () => {
                    console.log('BULK UPLOAD SUCCESSFULL.');
                    await fileUploadHelper.deleteFile(csvPath)

                    return callback(null, { status: 200, message: "BULK UPLOAD SUCCESSFUL" })
                })
                .on('error', async (error) => {
                    console.error('[ERROR WHILE PARSING CSV]:', error.message);
                    await fileUploadHelper.deleteFile(csvPath)
                    return callback(error)
                });

        } catch (error) {
            callback(error)
        }

    }
})()


