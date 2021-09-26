const mongoose = require('mongoose');

const { Schema } = mongoose;

require('./category');
require('./group');


const productSchema = new Schema ({
    nameProduct: {
        type: Schema.Types.String,
        required: true,
        minlength: 3
    },
    productCategory: {
        type: Schema.Types.ObjectId, ref: 'category'
    },
    groupProduct: {
        type: Schema.Types.ObjectId, ref: 'group'
    },
    specifications: {
        type: Schema.Types.String
    },
    picturePath: {
        type: Schema.Types.String
    }
});

const model = mongoose.model('product', productSchema)
module.exports = model;

