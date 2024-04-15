"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")

    customerRouter.route("/register").post(customerRouterCtrl.Register)
    customerRouter.route("/login").post(customerRouterCtrl.Login)
    customerRouter.route("/:id").get(customerRouterCtrl.Get)

    module.exports = customerRouter
})()