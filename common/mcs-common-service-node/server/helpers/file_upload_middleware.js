const multer = require('multer');
const path = require("path")

const destination = path.join(__dirname, "../../../../", "public")

const storage = multer.diskStorage({
    destination,
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});

const upload = multer({ storage });

module.exports = async (req, res, next) => {
    try {
        upload.single('file')(req, res, async (err) => {
            if (err) {
                return next(err);
            }
            next();
        });
    } catch (error) {
        next(error);
    }
};
