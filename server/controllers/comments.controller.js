const itemsStorage = require('../db/items.storage');
const commentsStorage = require('../db/comments.storage');

exports.getComments = function (req, res, next) {
    const itemId = +req.params.itemId;
    const index = itemsStorage().findIndex(item => item.id === itemId);

    if (index < 0) {
        return next();
    }

    const comments = commentsStorage().filter(comment => {
        return comment.itemId === itemId;
    });

    res.json(comments);
};

exports.addComment = function (req, res, next) {
    if (!req.body.comment) return res.status(400).send('Bad Request');

    const itemId = +req.params.itemId;
    const index = itemsStorage().findIndex(item => item.id === itemId);

    if (index < 0) {
        return next();
    }

    itemsStorage()[index].comments++;

    const comment = {
        id: commentsStorage.idCounter++,
        itemId: itemId,
        comment: req.body.comment
    };

    commentsStorage().push(comment);

    res.json(comment);
};