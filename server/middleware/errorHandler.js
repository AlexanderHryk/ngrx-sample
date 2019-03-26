module.exports = function (err, req, res, next) {
    console.error(err);

    if (err instanceof SyntaxError) {
        return res.status(400).send('Bad Request');
    }
    
    res.status(500).send('Internal Server Error');
}