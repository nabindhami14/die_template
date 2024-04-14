"use strict";

(() => {

    const express = require("express");
    const customerRouter = express.Router();
    const customerRouterCtrl = require(".")

    customerRouter.route("/login").post(customerRouterCtrl.Register)

    module.exports = customerRouter
})()