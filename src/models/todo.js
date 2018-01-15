import { Schema } from 'mongoose';

module.exports = (mongoose) => { 
    const Todo = new Schema({
        note: {
            type: String,
            required: true,
            trim: true
        },
    });

    return { Todo: mongoose.model('Todo', Todo) }; 
};
