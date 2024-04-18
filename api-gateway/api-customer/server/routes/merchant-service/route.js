"use strict";

(() => {
    const express = require("express");
    const merchantRouter = express.Router();
    const merchantRouterCtrl = require(".")

    merchantRouter.route("/").get(merchantRouterCtrl.GetMerchants)
    merchantRouter.route("/:merchantId").get(merchantRouterCtrl.GetMerchant)

    module.exports = merchantRouter
})()