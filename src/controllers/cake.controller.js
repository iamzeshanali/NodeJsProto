const httpStatus = require('http-status');
const { pick } = require('underscore');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const  cakeService  = require('../services/cake.service');
const ApiResponse = require('../utils/ApiResponse');

const createCake = catchAsync(async (req, res) => {
    const cake = await cakeService.createCake(req.body);
    new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], { cake }).send(res);
});

const getCakes = catchAsync(async (req, res) => {
    const cakes = await cakeService.getCakes();
    new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {cakes}).send(res);
});

const getCake = catchAsync(async (req, res) => {
    const cake = await cakeService.getCakeById(req.params.cakeId);
    if(!cake){
        throw new ApiError(httpStatus.NOT_FOUND, 'Cake not Found');
    }
    new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {cake}).send(res);
});

const updateCake = catchAsync(async (req, res) => {
    const cake = await cakeService.updateCakeById(req.params.cakeId, req.body);
    new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {cake}).send(res);
});

const deleteCake = catchAsync(async (req, res) => {
    const cake = await cakeService.deleteCakeById(req.params.cakeId, req.body);
    new ApiResponse(httpStatus.OK, httpStatus[httpStatus.OK], {cake}).send(res);
});

module.exports = {
    createCake,
    getCakes,
    getCake,
    updateCake,
    deleteCake,

};
