"use strict";

(() => {
    const express = require("express");
    const paymentRouter = express.Router();
    const paymentRouterCtrl = require(".")

    paymentRouter.route("/").post(paymentRouterCtrl.CreatePayment)

    module.exports = paymentRouter
})()