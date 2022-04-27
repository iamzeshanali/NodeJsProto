const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { categoryValidation } = require('../validations');
const  cakeController  = require('../controllers/cake.controller');

const router = express.Router();

router
    .route('/')
    .get(cakeController.getCake);

module.exports = router;
