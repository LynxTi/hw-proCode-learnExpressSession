const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        minlength: 3
    }
});

const model = mongoose.model('group', groupSchema)
module.exports = model;
