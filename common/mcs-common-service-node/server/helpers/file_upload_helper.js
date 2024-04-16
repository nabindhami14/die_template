((fileUploadHelper) => {
    const fs = require('fs');
    const path = require('path');

    fileUploadHelper.uploadFile = (filePath, destination) => {
        return new Promise((resolve, reject) => {
            const fileName = path.basename(filePath);

            // Check if destination folder exists, create if it doesn't
            if (!fs.existsSync(destination)) {
                fs.mkdirSync(destination, { recursive: true });
            }

            const destPath = path.join(destination, fileName);

            // Move the file to the destination folder
            fs.rename(filePath, destPath, err => {
                if (err) {
                    return reject(err);
                }
                resolve(fileName);
            });
        });
    };

    fileUploadHelper.deleteFile = (filePath) => {
        return new Promise((resolve, reject) => {
            // Check if file exists
            if (!fs.existsSync(filePath)) {
                return resolve(); // File doesn't exist, resolve immediately
            }

            // Delete file
            fs.unlink(filePath, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    };

})(module.exports);
