"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")

    const { fileUploadMiddleware } = require("common/helpers")


    customerRouter.route("/").post(customerRouterCtrl.CreateCustomer)
    customerRouter.route("/bulk-upload").post(fileUploadMiddleware, customerRouterCtrl.BulkUpload)

    customerRouter.route("/").get(customerRouterCtrl.GetCustomers)
    customerRouter.route("/:customerId").get(customerRouterCtrl.GetCustomer)

    module.exports = customerRouter
})()