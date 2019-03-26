const authStorage = require('../db/auth.storage');

module.exports = function (req, res, next) {
    const token = req.headers['x-auth-token'];

    if (!token || token !== authStorage().token) {
        return res.status(401).send('Unauthorized');
    }

    next();
}