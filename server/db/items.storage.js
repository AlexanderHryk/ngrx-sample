let storage = [
    { id: 1, name: 'Bill Gates', comments: 6 },
    { id: 2, name: 'Steve Jobs', comments: 14 },
    { id: 3, name: 'Mark Zuckerberg', comments: 8 }
];

module.exports = function () {
    return storage;
};

module.exports.idCounter = 4;

module.exports.filterSelf = function (cb) {
    storage = storage.filter(cb);
};