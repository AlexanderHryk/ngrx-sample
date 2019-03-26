const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth.router');
const itemsRouter = require('./routes/items.router');
const commentsRouter = require('./routes/comments.router');
const errorHandler = require('./middleware/errorHandler');

const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', authRouter);
app.use('/api', itemsRouter);
app.use('/api', commentsRouter);

app.use((req, res) => {
    res.status(404).send("Not Found");
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});