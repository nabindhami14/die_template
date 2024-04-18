"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")

    const { authMiddleware, fileUploadMiddleware } = require("common/helpers")


    customerRouter.route("/").post(customerRouterCtrl.CreateCustomer)
    customerRouter.route("/bulk-upload").post(fileUploadMiddleware, customerRouterCtrl.BulkUpload)



    // customerRouter.route("/:customerId").get(authMiddleware, customerRouterCtrl.GetCustomer)
    // customerRouter.route("/").get(authMiddleware, customerRouterCtrl.GetCustomers)
    
    customerRouter.route("/").get(customerRouterCtrl.GetCustomers)
    customerRouter.route("/:customerId").get(customerRouterCtrl.GetCustomer)

    module.exports = customerRouter
})()