'use strict';


const clientLoader = require('client');

module.exports = () => {
    clientLoader.adminClient.init()
    clientLoader.merchantClient.init()
};