"use strict";

const customerRouter = require("./customer-service/route");
const merchantRouter = require("./merchant-service/route");
const authRouter = require("./auth-service/route");

const express = require("express");
const router = express.Router();

(() => {
    router.use("/customers", customerRouter);
    router.use("/merchants", merchantRouter);
    router.use("/auth", authRouter);

    module.exports = router;
})();
