"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")

    customerRouter.route("/bulk-upload").get(customerRouterCtrl.BulkUpload)

    module.exports = customerRouter
})()