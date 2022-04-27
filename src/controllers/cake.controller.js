const httpStatus = require('http-status');
const { pick } = require('underscore');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { cakeService } = require('../services');
const ApiResponse = require('../utils/ApiResponse');

const createCake = catchAsync(async (req, res) => {
    const cake = await cakeService.createCake(req.body);
    new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], { cake }).send(res);
});

const getCake = catchAsync(async (req, res) => {
    new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK]).send('Cake not found');
});

module.exports = {
    createCake,
    getCake
};
