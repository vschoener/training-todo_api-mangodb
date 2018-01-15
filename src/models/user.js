module.exports = (mongoose) => { 
    const User = new mongoose.Schema({
        'email': {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
            unique: true
        },
        'password': {
            type: String,
            minlength: 5,
            require: true
        } 
    });

    return { User: mongoose.model('User', User) };
};
