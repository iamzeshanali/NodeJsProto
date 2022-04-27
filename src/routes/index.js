const express = require('express');
const { server } = require('../config/env');
const docRoute = require('./doc.route');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const categoryRoute = require('./category.route');
const cakeRoute = require('./cake.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/users',
        route: userRoute,
    },
    {
        path: '/categories',
        route: categoryRoute,
    },
    {
        path: '/cakes',
        route: cakeRoute,
    },
];

const devRoutes = [
    {
        path: '/docs',
        route: docRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (server.env === 'development') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

module.exports = router;
