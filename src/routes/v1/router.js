module.exports = (mongoose) => {
    const router = require('express').Router();

    router.get('/', (req, res) => {
        res.json({
            version: 1,
        });
    });

    // Routes resources list
    router.use('/todos', require('./todo')(mongoose));

    return router;
};
