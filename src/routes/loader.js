module.exports = (mongoose) => {
    const app = require('express')();
    const bodyParser = require('body-parser');
    const morgan = require('morgan');
    const apiVersions = ['1'];

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(morgan('dev'));
    
    app.get('/', (req, res) => {
        return res.json({message: 'Welcome to the API'});
    });

    for (let version of apiVersions) {
        let router = require('./v' + version + '/router')(mongoose);
        app.use('/v' + version, router);
    }

    // Error handler
    app.use((req, res, next) => {
        const error = new Error('Resource not found');
        error.proot = 404;
        next(error);
    });
    
    app.use((err, req, res, next) => {
        // log err.stack
        res.status(err.status || 500);
        return res.json({ error: { message: err.message } })
            .end();
    });

    return app;
};
