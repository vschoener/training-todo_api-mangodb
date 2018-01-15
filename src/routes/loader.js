module.exports = (mongoose) => {
    const app = require('express')();
    const bodyParser = require('body-parser');
    const apiVersions = ['1'];

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.get('/', (req, res) => {
        return res.json({message: 'Welcome to the API'});
    });

    for (let version of apiVersions) {
        let router = require('./v' + version + '/router')(mongoose);
        app.use('/v' + version, router);
    }

    // Error handler
    app.use((req, res, next) => {
        return res.status(404)
            .json({ error: { message: 'Resource not found' } })
            .end();
    });
    
    app.use((err, req, res, next) => {
        // log err.stack
        return res.status(500)
            .json({ error: { message: 'Technical error' } })
            .end();
    });

    return app;
};
