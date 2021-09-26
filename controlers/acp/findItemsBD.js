const categoryModel = require('../../models/category');
const groupModel = require('../../models/group');

const findAllCategoryes = async () => await categoryModel.find({});
const findAllGroup = async () => await groupModel.find({});

module.exports = {
    findAllCategoryes,
    findAllGroup
}