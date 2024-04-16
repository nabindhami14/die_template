const fileUploadHelper = require('./file_upload_helper');

// Example usage
const path = require("path")

const filePath = path.join(__dirname,"../../../../", "README.md")
const destinationPath = path.join(__dirname,"../../../../", "public")


// fileUploadHelper.uploadFile(filePath, destinationPath)
//     .then(fileName => {
//         console.log(`File ${fileName} uploaded successfully.`);
//     })
//     .catch(error => {
//         console.error('Error uploading file:', error);
//     });

fileUploadHelper.deleteFolder(destinationPath)
    .then(() => {
        console.log('Folder deleted successfully.');
    })
    .catch(error => {
        console.error('Error deleting folder:', error);
    });
