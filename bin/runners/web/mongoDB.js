const mongoose = require('mongoose');
const productModel = require('../../../models/product');
const url = 'mongodb://localhost:27017/onlineShop';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


const run = () => {
    mongoose.connect(url, options);
    const db = mongoose.connection;

    db.on('eror', (err) => {
        console.log('Db erore: ', err);
    });

    db.once('open', () => {
        console.log('Conected DB');

    });

    db.once('close', () => {
        console.log('DB close');
    });
}

module.exports = run;
