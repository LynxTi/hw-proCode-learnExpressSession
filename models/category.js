const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema ({
    name: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        minlength: 3
    }
});

const model = mongoose.model('category', categorySchema)
module.exports = model;
