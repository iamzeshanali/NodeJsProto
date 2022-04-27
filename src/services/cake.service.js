const httpStatus = require('http-status');
const { Cake, Brand } = require('../models');
const ApiError = require('../utils/ApiError');

const createCake = async (cakeBody) => {
    return await Cake.create(cakeBody);
};


module.exports = {
    createCake
};
