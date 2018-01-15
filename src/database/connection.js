const mongoose = require('mongoose');

module.exports = (config) => { 
    mongoose.Promise = global.Promise;
    mongoose.connect(`${config.database}`, {
        useMongoClient: true
    });

    mongoose.connection.on('error', console.error.bind(console, 'connection error'));

    return { mongoose };
};
