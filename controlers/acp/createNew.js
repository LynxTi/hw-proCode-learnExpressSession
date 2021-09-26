const categoryModel = require('../../models/category');
const groupModel = require('../../models/group');


const multer = require('multer');
const upload= multer({dest: './public/images/upload/'})
const path = require('path');

const addNewCategory = async (nameCategory) => {
    try {
        const doc = await categoryModel.create({name: nameCategory});
        const {id} = doc.id;

        return {status: 'ok', payload: {id}}
    } catch (err)  {
        return {status: 'DublicateName'}
    }
}

const addNewGroup = async (nameGroup) => {
    try {
        const doc = await groupModel.create({name: nameGroup});
        const {id} = doc.id;

        return {status: 'ok', payload: {id}}
    } catch (err)  {
        return {status: 'DublicateName'}
    }
}

const addNewProduct =  (req, res) => {
    // upload.single('uploaded_file'),
}

module.exports = {
    addNewCategory,
    addNewGroup,
    addNewProduct
};