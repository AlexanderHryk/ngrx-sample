const authStorage = require('../db/auth.storage');

exports.login = function (req, res) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('Bad Request');

    const authStorageData = authStorage();

    if (email !== authStorageData.email || password !== authStorageData.password) {
        return res.status(403).send('Forbidden');
    }

    res.json({
        token: authStorageData.token
    });
};

exports.logout = function (req, res) {
    res.status(200).send('OK');
};