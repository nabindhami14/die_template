"use strict";

const customerRouter = require("./customer-service/route");

const express = require("express");
const router = express.Router();

(() => {
    router.use("/auth", customerRouter);

    module.exports = router;
})();
