'use strict';


const clientLoader = require('client');

module.exports = () => {
    clientLoader.customerAuthClient.init()
    clientLoader.merchantClient.init()
};