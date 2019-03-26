const itemsStorage = require('../db/items.storage');
const commentsStorage = require('../db/comments.storage');

exports.getItem = function (req, res, next) {
    const itemId = +req.params.itemId;
    const index = itemsStorage().findIndex(item => item.id === itemId);

    if (index < 0) {
        return next();
    }

    res.json(itemsStorage()[index]);
};

exports.getItems = function (req, res) {
    if ('name' in req.query) {
        res.json(itemsStorage().filter(item => {
            return item.name.includes(req.query.name);
        }));
    } else {
        res.json(itemsStorage());
    }
};

exports.updateItem = function (req, res, next) {
    if (!req.body.name) return res.status(400).send('Bad Request');

    const itemId = +req.params.itemId;
    const index = itemsStorage().findIndex(item => item.id === itemId);

    if (index < 0) {
        return next();
    }

    const item = itemsStorage()[index];
    item.name = req.body.name;

    res.json(item);
};

exports.addItem = function (req, res) {
    if (!req.body.name) return res.status(400).send('Bad Request');

    const item = {
        id: itemsStorage.idCounter++,
        name: req.body.name,
        comments: 0
    };

    itemsStorage().push(item);

    res.json(item);
};

exports.deleteItem = function (req, res, next) {
    const itemId = +req.params.itemId;
    const index = itemsStorage().findIndex(item => item.id === itemId);

    if (index < 0) {
        return next();
    }

    commentsStorage.filterSelf(comment => {
        return comment.itemId !== itemId;
    });

    const deletedItem = itemsStorage()[index];
    itemsStorage().splice(index, 1);

    res.status(200).json(deletedItem);
};