const env = process.env.NODE_ENV || 'prod';
const config = require('./config/loader')(env);
const port = process.env.NODE_API_PORT || 80;
const { mongoose } = require('./database/connection')(config);
const app = require('./routes/loader')(mongoose);

app.listen(port, () => {
    console.log(`I'm running on port ${port}`);
});

// Only for testing 
module.exports = app;
