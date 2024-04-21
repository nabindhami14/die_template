"use strict";

const customerRouter = require("./customer-service/route");
const merchantRouter = require("./merchant-service/route");
const paymentRouter = require("./payment-service/route");

const { authMiddleware } = require("common/helpers")

const express = require("express");
const router = express.Router();

(() => {
    router.use("/auth", customerRouter);
    router.use("/merchants", authMiddleware, merchantRouter);
    router.use("/payments", authMiddleware, paymentRouter);

    module.exports = router;
})();
