const env = process.env.NODE_ENV || 'prod';
const config = require('./config/loader')(env);
const app = require('express')();
const port = process.env.NODE_API_PORT || 80;
const { mongoose } = require('./database/connection')(config);

app.listen(port, () => {
    console.log(`I'm running on port ${port}`);
});

app.get('/', (req, res, next) => {
    res.json({message: 'Server is live!'});
    next();
});

// Only for testing 
module.exports = app;
