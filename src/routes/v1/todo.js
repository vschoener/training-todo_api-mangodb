// This file act as a TodoController
// I could create a /controller/todoController file, but it
// makes the code more complicated for nothing in Node JS env (I think)

module.exports = (mongoose) => {
    const router = require('express').Router();

    router.route('/')
        .get((req, res) => {
            res.json({
                Todos: []
            });
        }).post((req, res) => {
            
        });

    router.route('/:id')
        .get((req, res) => {
            res.json({
                message: 'GET',
                params: req.params
            });
        }).put((req, res) => {
            res.json({
                message: 'PUT',
                params: req.params
            });
        }).delete((req, res) => {
            res.json({
                message: 'DELETE',
                params: req.params
            });
        });

    return router;
};
