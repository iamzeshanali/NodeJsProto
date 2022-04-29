const httpStatus = require('http-status');
const { categoryController } = require('../controllers');
const Cake = require('../models/cake.model');
const ApiError = require('../utils/ApiError');

const createCake = async (cakeBody) => {
    return await Cake.create(cakeBody);
};

const getCakes = async () => {
    return await Cake.find();
};

const getCakeById = async(id)=>{
    return await Cake.findById(id);
}

const updateCakeById = async(id, body) => {
    const cake = await getCakeById(id);
    if(!cake){
        return new ApiError(httpStatus.NOT_FOUND, 'Cake not Found');
    }else{
        Object.assign(cake, body);
        return await cake.save();
    }
}

const deleteCakeById = async(id)=>{
    const cake = await getCakeById(id);

    if(!cake){
        throw new ApiError(httpStatus.NOT_FOUND, 'Cake not Found');
    }else{
        return await cake.delete();
    }
}

module.exports = {
    createCake,
    getCakes,
    getCakeById,
    updateCakeById,
    deleteCakeById
};
