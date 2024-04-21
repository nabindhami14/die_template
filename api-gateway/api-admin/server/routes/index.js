"use strict";

const customerRouter = require("./customer-service/route");
const merchantRouter = require("./merchant-service/route");
const authRouter = require("./auth-service/route");

const { authMiddleware } = require("common/helpers")

const express = require("express");
const router = express.Router();

(() => {
    router.use("/auth", authRouter);
    router.use("/customers", authMiddleware, customerRouter);
    router.use("/merchants", authMiddleware, merchantRouter);

    module.exports = router;
})();
