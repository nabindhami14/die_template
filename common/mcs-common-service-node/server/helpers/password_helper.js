
((passwordHelper) => {
    const bcrypt = require("bcryptjs")

    passwordHelper.generateHashPassword = async (password) => {
        const hash =  bcrypt.hash(password,10)
        return hash
    }
    passwordHelper.comparePasssword = async (password, hashedPassword) => {
        const isMatch = await bcrypt.compare(password, hashedPassword)
        return isMatch
    }
})(module.exports)