"use strict";

const customerRouter = require("./customer-service/route");
const merchantRouter = require("./merchant-service/route");

const express = require("express");
const router = express.Router();

(() => {
    router.use("/auth", customerRouter);
    router.use("/merchants", merchantRouter);

    module.exports = router;
})();
