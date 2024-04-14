"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")

    customerRouter.route("/login").post(customerRouterCtrl.Register)
    customerRouter.route("/:id").get(customerRouterCtrl.Get)

    module.exports = customerRouter
})()