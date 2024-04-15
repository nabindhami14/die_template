"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")
    const { authMiddleware } = require("common/helpers")

    customerRouter.route("/register").post(customerRouterCtrl.Register)
    customerRouter.route("/login").post(customerRouterCtrl.Login)
    customerRouter.route("/me").get(authMiddleware, customerRouterCtrl.Profile)
    customerRouter.route("/:id").get(customerRouterCtrl.Get)

    module.exports = customerRouter
})()