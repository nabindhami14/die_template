"use strict";

(() => {

    const express = require("express");
    const healthCheckRouter = express.Router();
    const healthCheckRouterCtrl = require(".")

    healthCheckRouter.route("/").post(healthCheckRouterCtrl.HealthCheck)

    module.exports = healthCheckRouter
})()