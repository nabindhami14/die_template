"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")

    const { authMiddleware } = require("common/helpers")


    customerRouter.route("/:customerId").get(authMiddleware, customerRouterCtrl.GetCustomer)
    customerRouter.route("/").get(authMiddleware, customerRouterCtrl.GetCustomers)
    customerRouter.route("/bulk-upload").get(customerRouterCtrl.BulkUpload)

    module.exports = customerRouter
})()