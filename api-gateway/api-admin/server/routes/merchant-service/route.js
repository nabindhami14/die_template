"use strict";

(() => {
    const express = require("express");
    const merchantRouter = express.Router();
    const merchantRouterCtrl = require(".")

    merchantRouter.route("/").post(merchantRouterCtrl.CreateMerchant)
    merchantRouter.route("/:merchantId").get(merchantRouterCtrl.GetMerchant)
    merchantRouter.route("/").get(merchantRouterCtrl.GetMerchants)

    module.exports = merchantRouter
})()