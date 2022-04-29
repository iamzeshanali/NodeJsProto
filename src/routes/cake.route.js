const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { cakeValidation } = require('../validations');
const  cakeController  = require('../controllers/cake.controller');

const router = express.Router();

router
    .route('/')
    .post(cakeController.createCake)
    .get(cakeController.getCakes);

router
    .route('/:cakeId')
    .get(cakeController.getCake)
    .put(cakeController.updateCake)
    .delete(cakeController.deleteCake);

module.exports = router;
