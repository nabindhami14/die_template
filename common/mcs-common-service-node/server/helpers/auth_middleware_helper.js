const jwtHelper = require("./jwt_helper")


module.exports = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Bearer token missing in authorization header' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token not found in authorization header' });
    }

    try {
        const decoded = await jwtHelper.verifyAccessToken(token)
        req.user = decoded; // You can attach the decoded token to the request object for further use in route handlers
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid or expired' });
    }
}
